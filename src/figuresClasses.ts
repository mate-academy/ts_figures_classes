type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number
}

const isValid = (...items: number[]): void => {
  if (items.some((num) => num <= 0)) {
    throw new Error('Params should be more than 0');
  }
};

const rounder = (num: number): number => {
  return Math.floor(num * 100) / 100;
};

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    isValid(a, b, c);

    const maxSide: number = Math.max(a, b, c);

    if (maxSide >= a + b + c - maxSide) {
      throw new Error('Wrong sides for a triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiPerimeter: number = (a + b + c) / 2;

    return rounder(Math.sqrt(
      semiPerimeter * (semiPerimeter - a)
      * (semiPerimeter - b)
      * (semiPerimeter - c),
    ));
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    isValid(radius);
  }

  getArea(): number {
    return rounder(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    isValid(width, height);
  }

  getArea(): number {
    return rounder(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
