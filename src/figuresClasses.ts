enum Shape {
  circle = 'circle',
  rectangle = 'rectangle',
  triangle = 'triangle',
}

enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.triangle;

  constructor(
    private a: number,
    private b: number,
    private c: number,
    public color: Color,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('a, b and c must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Sum must be greater');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.circle;

  constructor(
    private radius: number,
    public color: Color,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.rectangle;

  constructor(
    private width: number,
    private height: number,
    public color: Color,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Error: a and b must be greater than 0');
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
