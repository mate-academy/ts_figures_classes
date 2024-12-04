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

function validatePositiveNumbers(...numbers: number[]): void {
  if (numbers.some((n) => n <= 0)) {
    throw new Error('Values must be greater than 0');
  }
}

function roundToTwo(num: number): number {
  return Math.floor(num * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape.Triangle = Shape.Triangle;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    validatePositiveNumbers(a, b, c);

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Sum of two sides should not be lesser than third side');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return roundToTwo(area);
  }
}

export class Circle implements Figure {
  shape: Shape.Circle = Shape.Circle;

  constructor(
    public color: string,
    public radius: number,
  ) {
    validatePositiveNumbers(radius);
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return roundToTwo(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape.Rectangle = Shape.Rectangle;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    validatePositiveNumbers(width, height);
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundToTwo(area);
  }
}

export function createFigure(
  type: Shape,
  color: string,
  ...params: number[]
): Figure {
  switch (type) {
    case Shape.Triangle:
      if (params.length !== 3) {
        throw new Error('Triangle requires 3 sides');
      }

      return new Triangle(color, params[0], params[1], params[2]);
    case Shape.Circle:
      if (params.length !== 1) {
        throw new Error('Circle requires 1 radius');
      }

      return new Circle(color, params[0]);
    case Shape.Rectangle:
      if (params.length !== 2) {
        throw new Error('Rectangle requires width and height');
      }

      return new Rectangle(color, params[0], params[1]);
    default:
      throw new Error('Unknown shape');
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
