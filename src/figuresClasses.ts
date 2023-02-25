// import { getTypeParameterOwner } from 'typescript';

enum ShapeType {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum ColorType {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: ShapeType;
  color: ColorType;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = ShapeType.Triangle;

  constructor(
    color: ColorType,
    private a: number,
    private b: number,
    private c: number,
  ) {
    this.validateSides();
    this.color = color;
  }

  getArea(): number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;

    return Math.floor(Math.sqrt(s * (s - a) * (s - b) * (s - c)) * 100) / 100;
  }

  private validateSides(): void {
    const sides = [this.a, this.b, this.c];

    if (sides.some((side) => side <= 0)) {
      throw new Error('All sides must have positive length');
    }

    if (sides[2] >= (sides[0] + sides[1])) {
      throw new Error(
        'The longest side must be less than the sum of the other two sides',
      );
    }
  }
}

export class Circle implements Figure {
  shape = ShapeType.Circle;

  constructor(
    public color: ColorType,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must have a positive length');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = ShapeType.Rectangle;

  constructor(
    public color: ColorType,
    private width: number,
    private height: number,
  ) {
    this.validateSides();
  }

  getArea(): number {
    return Math.floor(this.width * this.height);
  }

  private validateSides(): void {
    const dim = [this.width * this.height];

    if (dim.some((el) => el <= 0)) {
      throw new Error('All sides must have a positive length');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
