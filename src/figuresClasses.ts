enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

function checkLength(...args: number[]): void {
  if (args.some((argument) => argument <= 0)) {
    throw new Error('Every figure length must be > 0!');
  }
}

function rounder(area: number): number {
  return Number(area.toFixed(2));
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    checkLength(a, b, c);

    const longestSide = Math.max(a, b, c);

    if (longestSide >= a + b + c - longestSide) {
      throw new Error('Side must be the correct length');
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c));

    return rounder(area);
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    checkLength(radius);
  }

  getArea(): number {
    const area: number = Math.PI * (this.radius ** 2);

    return (Math.floor(area * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    checkLength(width, height);
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return rounder(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
