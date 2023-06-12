
enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

let result: number;

function roundingExpressions(expression: number): number {
  return Math.floor(expression * 100) / 100;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than zero!');
    }

    if (a + b <= c || a + c <= b) {
      throw new Error('Sides do not form a triangle!');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    result = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return roundingExpressions(result);
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero!');
    }
  }

  getArea(): number {
    result = Math.PI * this.radius * this.radius;

    return roundingExpressions(result);
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('All sides must be greater than zero!');
    }
  }

  getArea(): number {
    result = this.width * this.height;

    return roundingExpressions(result);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
