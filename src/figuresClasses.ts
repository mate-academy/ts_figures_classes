// type Fig = 'triangle' | 'circle' | 'rectangle';
// type Col = 'red' | 'green' | 'blue';

enum Shapes {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

enum Color {
  red,
  green,
  blue,
}

const down: (num: number) => number = num =>
  Math.floor(num * 100) / 100;

export interface Figure {
  shape: Shapes;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes = Shapes.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0
        || this.a + this.b <= this.c) {
      throw new Error('not a valid triangle');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return down(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)));
  }
}

export class Circle implements Figure {
  shape: Shapes = Shapes.circle;

  constructor(public color: Color, public radius: number) {
    if (this.radius <= 0) {
      throw new Error('not a valid circle');
    }
  }

  getArea(): number {
    return down(Math.PI * this.radius * this.radius);
  }
}

export class Rectangle {
  shape: Shapes = Shapes.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('not a valid rectangle');
    }
  }

  getArea(): number {
    return down(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
