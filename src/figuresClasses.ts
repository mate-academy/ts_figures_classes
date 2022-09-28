type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c];
    const hasNonPositiveSide = sides.some((side) => side <= 0);
    const longest = Math.max(...sides);
    const hasTooLongSide = sides
      .reduce((perimetr, side) => perimetr + side) - longest <= longest;

    if (hasNonPositiveSide) {
      throw new Error('The side of the triangle can`t be less than 0.');
    }

    if (hasTooLongSide) {
      throw new Error('Wrong sides. Not a triangle.');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Number(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
      .toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius of the circle can`t be less than 0.');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('Width and height can`t be less than 0.');
    }
  }

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
