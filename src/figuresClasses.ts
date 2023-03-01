enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

export interface Figure {
  shape: Shapes;
  color: Color;
  getArea: () => number;
}

function checkSidesLength(...sides: number[]): void {
  if (Math.min(...sides) <= 0) {
    throw new Error('Side lengths should always be positive numbers!');
  }
}

function roundExpression(expression: number): number {
  return Math.floor((expression) * 100) / 100;
}

export class Triangle implements Figure {
  shape = Shapes.Triangle;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    checkSidesLength(a, b, c);

    if (a >= b + c || b >= c + a || c >= a + b) {
      throw new Error(
        'The sum of the lengths of any two sides of a triangle '
          + 'is always greater than the length of the third side!',
      );
    }
  }

  getArea(): number {
    const semiP: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt([this.a, this.b, this.c]
      .reduce((prev, curr) => prev * (semiP - curr), semiP));

    return roundExpression(area);
  }
}

export class Circle implements Figure {
  shape = Shapes.Circle;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius cannot be negative!');
    }
  }

  getArea(): number {
    return roundExpression(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape = Shapes.Rectangle;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    checkSidesLength(height, width);
  }

  getArea(): number {
    return roundExpression(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
