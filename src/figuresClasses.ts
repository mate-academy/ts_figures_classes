enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  area: number;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  area: number;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
    this.area = this.getArea();

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`sides
      ${this.a}, ${this.b} and ${this.c}
      can't form a triangle`);
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const s: number = Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    );

    return Math.floor(s * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  area: number;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.color = color;
    this.radius = radius;
    this.area = this.getArea();

    if (radius <= 0) {
      throw new Error(`Radius ${this.radius} can't be 0 or less than 0`);
    }
  }

  getArea(): number {
    const s = Math.PI * this.radius ** 2;

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  area: number;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.color = color;
    this.width = width;
    this.height = height;
    this.area = this.getArea();

    if (width <= 0 || height <= 0) {
      throw new Error(`Width ${this.width} or height
      ${this.height} can't be 0 or less than 0`);
    }
  }

  getArea(): number {
    const s = this.width * this.height;

    return Math.floor(s * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.area}`;
}
