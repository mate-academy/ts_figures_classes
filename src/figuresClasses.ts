function isTriangle(a: number, b: number, c: number): boolean {
  if (a <= 0 || b <= 0 || c <= 0) {
    return true;
  }

  if (a + b <= c || a + c <= b || b + c <= a) {
    return true;
  }

  return false;
}

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
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape.Triangle = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (isTriangle(this.a, this.b, this.c)) {
      throw new Error('throws an error');
    }
  }

  getArea = (): number => {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.round(area * 100) / 100;
  };
}

export class Circle implements Figure {
  shape: Shape.Circle = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('throws an error');
    }
  }

  getArea = (): number => {
    const area = Math.PI * (this.radius * this.radius);

    return Math.floor(area * 100) / 100;
  };
}

export class Rectangle {
  shape: Shape.Rectangle = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('throws an error');
    }
  }

  getArea = (): number => {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  };
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
