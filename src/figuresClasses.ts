// import { moveEmitHelpers } from 'typescript';
type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}
export interface Figure {
  color: Color;
  shape: Shape;
  getArea: () => number;
}

const roundResult = (num: number): number => {
  return Math.floor(num * 100) / 100;
};

const checkParameters = (...parameters: number[]): void => {
  if (parameters.some((num) => num <= 0)) {
    throw new Error('Enter number bigger than 0!');
  }
};

export class Triangle {
  shape = Shape.Triangle;

  constructor(
    public color: Figure,
    private a: number,
    private b: number,
    private c: number,
  ) {
    checkParameters(a, b, c);

    if (this.a >= this.b + this.c
      || this.b >= this.a + this.c
      || this.c >= this.a + this.b) {
      throw new Error(
        `Sides ${this.a}, ${this.b} and ${this.c} can't form a triangle`,
      );
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      semiperimeter
        * (semiperimeter - this.a)
        * (semiperimeter - this.b)
        * (semiperimeter - this.c),
    );

    return roundResult(area);
  }
}

export class Circle {
  shape = Shape.Circle;

  constructor(
    public color: Figure,
    private radius: number,
  ) {
    checkParameters(radius);
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return roundResult(area);
  }
}

export class Rectangle {
  shape = Shape.Rectangle;

  constructor(
    public color: Figure,
    private width: number,
    private height: number,
  ) {
    checkParameters(width, height);
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundResult(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
