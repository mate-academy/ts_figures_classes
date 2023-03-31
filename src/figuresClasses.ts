enum Color {
  Blue = 'blue',
  Red = 'red',
  Green = 'green',
}

enum Shape {
  Rectangle = 'rectangle',
  Circle = 'circle',
  Triangle = 'triangle',
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

function roundValue(value: number): number {
  return Math.floor(value * 100) / 100;
}

function isCorrectSides(...sides: number[]): void {
  if (sides.some((side) => side <= 0)) {
    throw new Error('side of the figure must be bigger than zero');
  }
}

export class Triangle implements Figure {
  readonly shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('incorrect values for the triangle');
    }
    isCorrectSides(a, b, c);
  }

  getArea(): number {
    const halfOfPerimeter = (this.a + this.b + this.c) / 2;
    const squareOfTriangle = Math.sqrt(
      halfOfPerimeter * (halfOfPerimeter - this.a)
      * (halfOfPerimeter - this.b)
      * (halfOfPerimeter - this.c),
    );

    return roundValue(squareOfTriangle);
  }
}

export class Circle implements Figure {
  readonly shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    isCorrectSides(radius);
  }

  getArea(): number {
    return roundValue(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  readonly shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    isCorrectSides(width, height);
  }

  getArea(): number {
    return roundValue(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
