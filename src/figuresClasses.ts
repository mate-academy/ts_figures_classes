enum Shapes {
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
  shape: Shapes,
  color: Color,
  getArea: () => number;
}

function checkAllSides(...args: number[]): void {
  if (Math.min(...args) <= 0) {
    throw new Error('The length or radius cannot be negative number');
  }
}

function getRound(area: number): number {
  return Math.floor((area) * 100) / 100;
}

export class Triangle {
  readonly shape = Shapes.Triangle;

  constructor(
    readonly color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    checkAllSides(a, b, c);

    const isA = a >= b + c;
    const isB = b >= c + a;
    const isC = c >= a + b;

    if (isA || isB || isC) {
      throw new Error('This is not a triangle, please check side`s values');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiPerimeter = (a + b + c) / 2;
    const area
    = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - a)
      * (semiPerimeter - b)
      * (semiPerimeter - c),
    );

    return getRound(area);
  }
}

export class Circle {
  readonly shape = Shapes.Circle;

  constructor(
    readonly color: Color,
    private radius: number,
  ) {
    checkAllSides(radius);
  }

  getArea(): number {
    return getRound(Math.PI * this.radius ** 2);
  }
}

export class Rectangle {
  readonly shape = Shapes.Rectangle;

  constructor(
    readonly color: Color,
    private width: number,
    private height: number,
  ) {
    checkAllSides(width, height);
  }

  getArea(): number {
    return getRound(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
