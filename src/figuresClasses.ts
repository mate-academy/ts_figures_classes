export interface Figure {
  shape: `triangle` | `circle` | `rectangle`;
  color: `red` | `green` | `blue`;

  getArea(): number;
}

const lengthError = new Error('some length < 0');
const tringleError = new Error('some side bigger than both other');

export class Triangle implements Figure {
  public shape: 'triangle' = 'triangle';

  constructor(
    public color: `red` | `green` | `blue`,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw lengthError;
    }

    if (
      this.a + this.b <= this.c ||
      this.a + this.c <= this.b ||
      this.c + this.b <= this.a
    ) {
      throw tringleError;
    }
  }

  public getArea(): number {
    const hP = (this.a + this.b + this.c) / 2;
    const area =
      Math.floor(
        (hP * (hP - this.a) * (hP - this.b) * (hP - this.c)) ** (1 / 2) * 100,
      ) / 100;

    return area;
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  constructor(
    public color: `red` | `green` | `blue`,
    public r: number,
  ) {
    if (this.r <= 0) {
      throw lengthError;
    }
  }

  public getArea(): number {
    return Math.floor(Math.PI * this.r ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  constructor(
    public color: `red` | `green` | `blue`,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw lengthError;
    }
  }

  public getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
