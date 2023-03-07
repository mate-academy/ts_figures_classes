type Color = 'red' | 'green' | 'blue';

enum FigureType {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  color: Color;
  shape: FigureType;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = FigureType.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Wrong value for Triangle');
    }

    if (
      a + b <= c
      || a + c <= b
      || b + c <= a
    ) {
      throw new Error('Wrong value for Triangle');
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(
      halfPerimeter
       * ((halfPerimeter - this.a)
       * (halfPerimeter - this.b)
       * (halfPerimeter - this.c)),
    );

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = FigureType.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Wrong value for Circle');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = FigureType.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Wrong value for Rectangle');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
