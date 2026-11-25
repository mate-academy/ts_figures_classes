export enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = Shape.Triangle;

  constructor(
    readonly color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be greater than 0');
    }

    const longest = Math.max(a, b, c);

    if (longest >= a + b + c - longest) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      semiperimeter *
        (semiperimeter - this.a) *
        (semiperimeter - this.b) *
        (semiperimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape = Shape.Circle;

  constructor(
    readonly color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape = Shape.Rectangle;

  constructor(
    readonly color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
