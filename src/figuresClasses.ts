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
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a >= b + c || b >= a + c || c >= b + a) {
      throw new Error(`Invalid inputs - ${this.shape}`);
    }
  }

  getArea(): number {
    const pe = (this.a + this.b + this.c) / 2;
    const float = Math.sqrt(pe * (pe - this.a) * (pe - this.b) * (pe - this.c));

    return Math.round(float * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Invalid inputs - ${this.shape}`);
    }
  }

  getArea(): number {
    const float = Math.PI * (this.radius ** 2);

    return Math.floor(float * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`Invalid inputs - ${this.shape}`);
    }
  }

  getArea(): number {
    const float = this.width * this.height;

    return Math.round(float * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
