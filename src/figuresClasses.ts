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
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0
        || this.b <= 0
        || this.c <= 0
        || this.a + this.b <= this.c
        || this.a + this.c <= this.b
        || this.b + this.c <= this.a) {
      throw new Error('Enter correct length');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    let area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    area = Math.trunc(area * 100) / 100;

    return area;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Enter correct length');
    }
  }

  getArea(): number {
    let area = Math.PI * this.radius * this.radius;

    area = Math.trunc(area * 100) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Enter correct length');
    }
  }

  getArea(): number {
    let area = this.width * this.height;

    area = Math.trunc(area * 100) / 100;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
