type ShapeType = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface IFigure {
  color: Color;
  shape: ShapeType;
  get area(): number;
  getArea(): number;
}

export abstract class Figure implements IFigure {
  color: Color;

  shape: ShapeType;

  constructor(
    color: Color,
    shape: ShapeType,
  ) {
    this.color = color;
    this.shape = shape;
  }

  abstract get area(): number;

  getArea(): number {
    return Math.trunc(this.area * 100) / 100;
  }
}

export class Triangle extends Figure {
  a: number;

  b: number;

  c: number;

  constructor(
    color: Color,
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sizes should be positive values');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Incorrect sizes');
    }

    super(color, 'triangle');
    this.a = a;
    this.b = b;
    this.c = c;
  }

  get area(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (s * (s - this.a) * (s - this.b) * (s - this.c)) ** (1 / 2);
  }
}

export class Circle extends Figure {
  radius: number;

  constructor(
    color: Color,
    radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Sizes should be positive values');
    }

    super(color, 'circle');
    this.radius = radius;
  }

  get area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

export class Rectangle extends Figure {
  width: number;

  height: number;

  constructor(
    color: Color,
    width: number,
    height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sizes should be positive values');
    }

    super(color, 'rectangle');
    this.width = width;
    this.height = height;
  }

  get area(): number {
    return this.width * this.height;
  }
}

export function getInfo(element: Figure): string {
  return `A ${element.color} ${element.shape} - ${element.getArea()}`;
}
