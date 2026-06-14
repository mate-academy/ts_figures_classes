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
    // Check if all sides are positive
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be positive numbers');
    }

    // Triangle inequality: sum of any two sides must be greater than the third
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        'The sum of any two sides must be greater than the third side',
      );
    }
  }

  getArea(): number {
    // Using Heron's formula
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape = Shape.Circle;

  constructor(
    readonly color: Color,
    private radius: number,
  ) {
    // Check if radius is positive
    if (radius <= 0) {
      throw new Error('Radius must be a positive number');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape = Shape.Rectangle;

  constructor(
    readonly color: Color,
    private width: number,
    private height: number,
  ) {
    // Check if all dimensions are positive
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  const areaString = area % 1 === 0 ? area.toString() : area.toFixed(2);

  return `A ${figure.color} ${figure.shape} - ${areaString}`;
}
