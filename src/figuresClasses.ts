type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle';

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(
    color: Color,
    a: number, b: number, c: number,
  ) {
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Sides must be bigger than 0');
    }

    const maxSide = Math.max(this.a, this.b, this.c);
    const sumOfOtherSides = this.a + this.b + this.c - maxSide;

    if (maxSide >= sumOfOtherSides) {
      throw new Error(
        'The longest side must be shorter than the sum of the other two sides.',
      );
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle';

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('Radius must be bigger than 0');
    }
  }

  getArea(): number {
    const circleArea: number = Math.PI * (this.radius ** 2);

    return Math.floor(circleArea * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width or height must be bigger than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
