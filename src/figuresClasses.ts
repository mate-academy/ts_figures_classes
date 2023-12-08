export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: () => number,
}

export class Triangle implements Figure {
  shape: Figure['shape'];

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = Shape.Triangle;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Incorrect length of one or more sides');
    }

    if (a >= (b + c) || b >= (a + c) || c >= (a + b)) {
      throw new Error(
        'sides 1, 2 and 3 can\'t form a triangle',
      );
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const fullResult: number
      = Math.sqrt((a + b + c) * (b + c - a) * (a + c - b) * (a + b - c)) / 4;

    return Math.floor(fullResult * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Figure['shape'];

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    this.shape = Shape.Circle;

    if (radius <= 0) {
      throw new Error('throws an error');
    }
  }

  getArea(): number {
    const { radius } = this;

    return Math.floor(Math.PI * (radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Figure['shape'];

  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
  ) {
    this.shape = Shape.Rectangle;

    if (width <= 0 || height <= 0) {
      throw new Error('throws an error');
    }
  }

  getArea(): number {
    const { width, height } = this;

    return width * height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
