type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
type Callback = () => number;

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: Callback;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Zero not allowed!');
    }

    if (
      this.a >= this.b + this.c ||
      this.b >= this.a + this.c ||
      this.c >= this.b + this.a
    ) {
      throw new Error('the longest side of a triangle entered wrongly!');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const res = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(res * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('radius cannot be 0!');
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Zero values not allowed!');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
