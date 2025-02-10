type ShapeType = 'triangle' | 'circle' | 'rectangle';
type ColorType = 'red' | 'green' | 'blue';

export interface Figure {
  shape: ShapeType;
  color: ColorType;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: ShapeType = 'triangle';

  constructor(
    public color: ColorType,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const perimetr: number = this.a + this.b + this.c;

    if (
      this.a <= 0 ||
      this.b <= 0 ||
      this.c <= 0 ||
      perimetr - 2 * Math.max(this.a, this.b, this.c) <= 0
    ) {
      throw new Error('Wrong required data');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return +(
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    ).toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: ShapeType = 'circle';

  constructor(
    public color: ColorType,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Wrong required data');
    }
  }

  getArea(): number {
    return +(Math.floor(Math.PI * this.radius ** 2 * 100) / 100).toFixed(2);
  }
}

export class Rectangle implements Figure {
  public shape: ShapeType = 'rectangle';

  constructor(
    public color: ColorType,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Wrong required data');
    }
  }

  getArea(): number {
    return +(Math.floor(this.width * this.height * 100) / 100).toFixed(2);
  }
}

// type FigureType = Triangle | Circle | Rectangle;

// export function getInfo(figure: FigureType): string {
//   return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
// }

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
