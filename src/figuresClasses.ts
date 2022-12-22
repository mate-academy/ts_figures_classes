enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes,
  color: Colors,
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes = Shapes.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const longestSide = Math.max(a, b, c);

    const sumOtherSides = (a + b + c) - longestSide;

    if (longestSide >= sumOtherSides) {
      throw new Error(
        'Triangle\'s longest side can not >= than a sum of two others',
      );
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        'Triangle\'s longest side can not >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);

    return Math.floor(Math
      .sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shapes = Shapes.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(
        'Circle\'s radius can not be 0 or negative number!',
      );
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = Shapes.Rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        'Rectangle\'s width or height can not be 0 or negative number!',
      );
    }
  }

  getArea(): number {
    return Math.floor(this.height * this.width * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
