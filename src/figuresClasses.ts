enum Color {
  red,
  green,
  blue,
}

enum Shape {
  triangle,
  circle,
  rectangle,
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || c + b <= a) {
      throw new Error('One or more sides less than 0');
    }
  }

  getArea():number {
    const { a, b, c } = this;
    const p = 0.5 * (a + b + c);

    return +Math.sqrt(p * (p - a) * (p - b) * (p - c)).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius less than or equal to 0');
    }
  }

  getArea(): number {
    const { radius } = this;

    return Math.floor(Math.PI * radius * radius * 100) / 100;
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
      throw new Error('width or height less than or equal to 0');
    }
  }

  getArea():number {
    const { width, height } = this;

    return width * height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
