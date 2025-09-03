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

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0) {
      throw new Error(`Triangle side 'a' must be greater than 0, got ${a}`);
    }

    if (b <= 0) {
      throw new Error(`Triangle side 'b' must be greater than 0, got ${b}`);
    }

    if (c <= 0) {
      throw new Error(`Triangle side 'c' must be greater than 0, got ${c}`);
    }

    if (a + b <= c) {
      throw new Error(
        `Triangle inequality failed: a + b must be greater than c (${a} + ${b} <= ${c})`,
      );
    }

    if (a + c <= b) {
      throw new Error(
        `Triangle inequality failed: a + c must be greater than b (${a} + ${c} <= ${b})`,
      );
    }

    if (b + c <= a) {
      throw new Error(
        `Triangle inequality failed: b + c must be greater than a (${b} + ${c} <= ${a})`,
      );
    }
  }

  public getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Circle radius must be greater than 0, got ${radius}`);
    }
  }

  public getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0) {
      throw new Error(`Rectangle width must be greater than 0, got ${width}`);
    }

    if (height <= 0) {
      throw new Error(`Rectangle height must be greater than 0, got ${height}`);
    }
  }

  public getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
