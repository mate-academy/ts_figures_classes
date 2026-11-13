enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.triangle;

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const sqrt = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Number(sqrt.toFixed(2));
  }

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('our error message');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('our error message');
    }
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.circle;

  getArea(): number {
    const circleSquare = Math.pow(this.radius, 2) * Math.PI * 100;

    const roundedResult = Math.floor(circleSquare) / 100;

    return Number(roundedResult.toFixed(2));
  }

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('our error message');
    }
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.rectangle;

  getArea(): number {
    return this.width * this.height;
  }

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('our error message');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
