enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const sqrt =
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100;
    const resultRounded = Math.floor(sqrt) / 100;

    return Number(resultRounded.toFixed(2));
  }

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All triangle sides must be positive numbers');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(
        `Invalid triangle sides: the sum of 
        any two sides must be greater than the third side`,
      );
    }
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

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
      throw new Error('Circle radius must be positive');
    }
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  getArea(): number {
    const rectangleSquare = this.width * this.height * 100;
    const roundedrectangleSquare = Math.floor(rectangleSquare) / 100;

    return Number(roundedrectangleSquare.toFixed(2));
  }

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle width and height must be positive');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
