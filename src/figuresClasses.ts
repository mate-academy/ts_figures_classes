type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

const round = (number: number): number => Math.floor(number * 100) / 100;

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('A + B <= C');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be >0');
    }
  }

  getArea(): number {
    const halfPer: number = (this.a + this.b + this.c) / 2;

    return round(Math.sqrt(halfPer * (halfPer - this.a)
    * (halfPer - this.b) * (halfPer - this.c)));
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public rad: number,
  ) {
    if (rad <= 0) {
      throw new Error('Radius must be >0');
    }
  }

  getArea(): number {
    return round(Math.PI * this.rad * this.rad);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Sides must be >0');
    }
  }

  getArea(): number {
    return round(this.a * this.b);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
