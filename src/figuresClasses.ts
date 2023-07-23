type Colors = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Rectangle = 'rectangle',
  Circle = 'circle',
}

export interface Figure {
  shape: Shape;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c];

    sides.sort((x, y) => y - x);

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Attention, your triangle is not correct');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Attention, your triangle is not correct');
    }
  }

  getArea(): number {
    const {
      a,
      b,
      c,
    } = this;
    const square = (a + b + c) / 2;

    const area = Math.sqrt(
      square * (square - a) * (square - b) * (square - c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Attention, your circle is not correct');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Attention, your rectangle is not correct');
    }
  }

  getArea(): number {
    const {
      width,
      height,
    } = this;

    return width * height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
