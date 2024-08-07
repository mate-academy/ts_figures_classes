enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'blue' | 'green';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function checkOnError(...args: number[]): void {
  if (args.some((arg: number) => arg <= 0)) {
    throw new Error('Some side less 0');
  }
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    checkOnError(a, b, c);

    const sideOfTriangle = [a, b, c].sort((a1, b1) => b1 - a1);
    const condition =
      sideOfTriangle[0] >= sideOfTriangle[1] + sideOfTriangle[2];

    if (condition) {
      throw new Error('Some side less 0');
    }
  }

  getArea(): number {
    const semiPerimeter = (1 / 2) * (this.a + this.b + this.c);
    const area = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.a) *
        (semiPerimeter - this.b) *
        (semiPerimeter - this.c),
    );

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    checkOnError(radius);
  }

  getArea(): number {
    return Math.floor(this.radius ** 2 * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    checkOnError(width, height);
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
