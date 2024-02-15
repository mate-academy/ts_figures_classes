export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function roundDown(num: number): number {
  return Math.floor(num * 100) / 100;
}

export class Triangle implements Figure {
  color: Color;

  shape: Shape = 'triangle';

  a: number;

  b: number;

  c: number;

  constructor(
    public figureColor: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Sides must be greater than zero');
    }

    if (sideA >= sideB + sideC
      || sideB >= sideA + sideC || sideC >= sideA + sideB) {
      throw new Error('Invalid triangle sides');
    }

    this.color = figureColor;
    this.a = sideA;
    this.b = sideB;
    this.c = sideC;
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (a + b + c) / 2;
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return roundDown(area);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const { radius } = this;
    const area = Math.PI * radius * radius;

    return roundDown(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than zero');
    }
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
