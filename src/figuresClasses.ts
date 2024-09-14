enum Shape {
  Triangle = 'TRIANGLE',
  Circle = 'CIRCLE',
  Rectangle = 'RECTANGLE',
}

enum Color {
  Red = 'RED',
  Green = 'GREEN',
  Blue = 'BLUE',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than zero!');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero!');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The side cannot be less or equal to 0!');
    }

    if (Math.max(a, b, c) >= a + b + c - Math.max(a, b, c)) {
      throw new Error(
        "The longest side can't be more or equal to the sum of the rest sides!",
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color.toLowerCase()} ${figure.shape.toLowerCase()} - ${figure.getArea()}`;
}
