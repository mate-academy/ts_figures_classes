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

const checkIfValid = (...args: number[]): boolean => (
  args.every((el: number) => el > 0));

const rounder = (area: number, roundTo: number): number => (
  Math.floor(roundTo * area) / roundTo);

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!checkIfValid(a, b, c)) {
      throw new Error('a, b and c must be > 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('The longest side must be >= than a sum of two others');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c));

    return rounder(area, 100);
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (!checkIfValid(radius)) {
      throw new Error('Radius must be > 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return rounder(area, 100);
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (!checkIfValid(height, width)) {
      throw new Error('Width and height must be > 0');
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    return rounder(area, 100);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
