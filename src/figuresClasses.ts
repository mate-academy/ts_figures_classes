enum Color {
  Blue = 'blue',
  Red = 'red',
  Green = 'green',
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: string,
  color: string,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape;

  color: Color;

  a: number;

  b: number;

  c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    this.shape = Shape.Triangle;
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Length of the triangle`s side is lower or equal 0');
    }

    if (this.a >= this.b + this.c
      || this.b >= this.a + this.c
      || this.c >= this.a + this.b
    ) {
      // eslint-disable-next-line max-len
      throw new Error('Length of the biggest triangle`s side should not be bigger than sum of 2 others');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const square = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    this.radius = radius;
    this.shape = Shape.Circle;
    this.color = color;

    if (this.radius <= 0) {
      throw new Error('Radius must be bigger than 0');
    }
  }

  getArea(): number {
    const square = Math.PI * (this.radius ** 2);

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    this.width = width;
    this.height = height;
    this.shape = Shape.Rectangle;
    this.color = color;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width and height must be bigger than 0');
    }
  }

  getArea(): number {
    const square = this.height * this.width;

    return Math.floor(square * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
