function checkIsCorrectFigureSize(...numbers: number[]): void {
  if (numbers.some((num) => num <= 0)) {
    throw new Error('Some value is <= 0');
  }
}

enum Shape {
  TRIANGLE = 'triangle',
  CIRCLE = 'circle',
  RECTANGLE = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape = Shape.TRIANGLE;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    checkIsCorrectFigureSize(a, b, c);

    if (a + b <= c
      || a + c <= b
      || b + c <= a
    ) {
      throw new Error('Invalid triangle sides');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return +Math
      .sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))
      .toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.CIRCLE;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    checkIsCorrectFigureSize(radius);
  }

  getArea(): number {
    return +Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.RECTANGLE;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    checkIsCorrectFigureSize(width, height);
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
