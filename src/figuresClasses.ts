type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('All sides of triangle must be greater than 0!!!');
    }

    const max = Math.max(this.a, this.b, this.c);

    if (max === this.a && max >= this.b + this.c) {
      throw new Error("Sum of sides 'b' and 'c' is less than side 'a'!!!");
    }

    if (max === this.b && max >= this.a + this.c) {
      throw new Error("Sum of sides 'a' and 'c' is less than side 'b'!!!");
    }

    if (max === this.c && max >= this.a + this.b) {
      throw new Error("Sum of sides 'a' and 'b' is less than side 'c'!!!");
    }
  }

  getArea(): number {
    const semiP: number = 1 / 2 * (this.a + this.b + this.c);
    const square: number = Math.sqrt(
      semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c),
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
