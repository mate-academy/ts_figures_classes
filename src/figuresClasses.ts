type Color = 'red' | 'green' | 'blue';

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.correctValuesOfFigure();
  }

  correctValuesOfFigure(): void {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Incorrect values');
    }

    let sides: number[] = [this.a, this.b, this.c];

    sides = sides.sort((a: number, b: number) => b - a);

    const longestSide: number = sides[0];

    if (longestSide >= sides[1] + sides[2]) {
      throw new Error('Incorrect values');
    }
  }

  getArea(): number {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(
      semiPerimeter * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c),
    ) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.correctValuesOfFigure();
  }

  correctValuesOfFigure(): void {
    if (this.radius <= 0) {
      throw new Error('Incorrect values');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.correctValuesOfFigure();
  }

  correctValuesOfFigure(): void {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Incorrect values');
    }
  }

  getArea(): number {
    return Math.floor(this.height * this.width * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const square = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${square}`;
}
