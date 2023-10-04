type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides of triangle must be greater than 0!!!');
    }

    const max = Math.max(a, b, c);

    if (max === a && max >= b + c) {
      throw new Error("Sum of sides 'b' and 'c' is less than side 'a'!!!");
    }

    if (max === b && max >= a + c) {
      throw new Error("Sum of sides 'a' and 'c' is less than side 'b'!!!");
    }

    if (max === c && max >= a + b) {
      throw new Error("Sum of sides 'a' and 'b' is less than side 'c'!!!");
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiP: number = 1 / 2 * (a + b + c);
    const square: number = Math.sqrt(
      semiP * (semiP - a) * (semiP - b) * (semiP - c),
    );

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius cannot be less or equal to 0!!!');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must both be greater than 0!!!');
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
