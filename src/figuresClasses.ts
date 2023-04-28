
enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

enum Color {
  'red',
  'green',
  'blue',
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Any length must be > 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        'The longest side of a triangle must be < than a sum of two others',
      );
    }
  }

  getArea(): number {
    const sP: number = (this.a + this.b + this.c) / 2;
    const area: number = Math
      .sqrt(sP * (sP - this.a) * (sP - this.b) * (sP - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be longer then 0');
    }
  }

  getArea(): number {
    return Math.floor(this.radius * this.radius * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle`s sides should be longer then 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
