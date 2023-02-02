type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(public color: Color,
    public a: number,
    public b: number,
    public c: number) {
    const max = Math.max(a, b, c);

    if ((max >= (a + b + c - max)) || (a <= 0) || (b <= 0) || (c <= 0)) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;
    const underSqrt = semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b) * (semiperimeter - this.c);
    const AreaLong = Math.sqrt(underSqrt);
    const Area = +((AreaLong).toFixed(2));

    return Area;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error(`this radius ${radius} can't form a triangle`);
    }
  }

  getArea(): number {
    const AreaLong = Math.PI * this.radius * this.radius;
    const Area = (Math.floor(AreaLong * 100)) / 100;

    return Area;
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  constructor(public color: Color,
    public width: number,
    public height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error(`sides ${width} and ${height} can't form a rectangle`);
    }
  }

  getArea(): number {
    const Area = +((this.width * this.height).toFixed(2));

    return Area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
