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

export class Triangle implements Figure {
  shape: Shape.Triangle;

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = Shape.Triangle;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Please enter valid positive numbers');
    }

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error('This sides can\'t form a triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;
    const area = s * (s - a) * (s - b) * (s - c);

    return Math.floor(Math.sqrt(area) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape.Circle;

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    this.shape = Shape.Circle;

    if (radius <= 0) {
      throw new Error('Please enter valid positive number');
    }
  }

  getArea(): number {
    const { radius } = this;
    const area = Math.PI * (radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape.Rectangle;

  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
  ) {
    this.shape = Shape.Rectangle;

    if (width <= 0 || height <= 0) {
      throw new Error('Please enter valid positive numbers');
    }
  }

  getArea(): number {
    const { width, height } = this;

    return Math.floor(width * height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
