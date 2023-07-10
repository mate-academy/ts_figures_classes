export enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export enum Color {
  red,
  green,
  blue,
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Length of sides must be greater then 0');
    }

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error('Sum of two sides must be greater than the third side');
    }
  }

  getArea(): number {
    const area = (this.a + this.b + this.c) / 2;

    const s = Math.sqrt(
      area * (area - this.a) * (area - this.b) * (area - this.c),
    );

    return Number(s.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const s = Math.PI * (this.radius ** 2);

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Length of sides must be greater then 0');
    }
  }

  getArea(): number {
    const s = this.width * this.height;

    return Number(s.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
