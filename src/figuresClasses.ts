type ColorType = 'red' | 'green' | 'blue';

enum ShapeEnum {
  TRIANGLE = 'triangle',
  CIRCLE = 'circle',
  RECTANGLE = 'rectangle',
}

export interface Figure {
  shape: ShapeEnum;
  color: ColorType;
  getArea: () => number;
}

export abstract class BaseFigure implements Figure {
  shape: ShapeEnum;

  color: ColorType;

  constructor(shape: ShapeEnum, color: ColorType) {
    this.color = color;
    this.shape = shape;
  }

  abstract getArea(): number;
}

export class Triangle extends BaseFigure {
  a: number;

  b: number;

  c: number;

  constructor(color: ColorType, a: number, b: number, c: number) {
    super(ShapeEnum.TRIANGLE, color);
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Sides of a triangle must be positive');
    }

    const maxValue: number = Math.max(this.a, this.b, this.c);
    const sumOtherValue: number = this.a + this.b + this.c - maxValue;

    if (maxValue >= sumOtherValue) {
      throw new Error(
        'The sum of the two sides must be greater than the third side',
      );
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle extends BaseFigure {
  radius: number;

  constructor(color: ColorType, radius: number) {
    super(ShapeEnum.CIRCLE, color);
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('Radius must be positive');
    }
  }

  getArea(): number {
    const area: number = this.radius * this.radius * Math.PI;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle extends BaseFigure {
  width: number;

  height: number;

  constructor(color: ColorType, width: number, height: number) {
    super(ShapeEnum.RECTANGLE, color);
    this.width = width;
    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width and height must be positive');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
