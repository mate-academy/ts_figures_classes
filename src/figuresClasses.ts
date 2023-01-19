enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  color: Color,
  shape: Shape,
  getArea(): number
}

function validateSides(...args: number[]): void {
  if (args.some((side: number) => side <= 0)) {
    throw new Error('Sides are not valid');
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
    const biggestSide: number = Math.max(a, b, c);
    const error: string = `Sides ${a}, ${b}`
    + `and ${c} can't form a triangle`;

    switch (biggestSide) {
      case a:
        if ((b + c) <= a) {
          throw new Error(error);
        }
        break;
      case b:
        if ((a + c) <= b) {
          throw new Error(error);
        }
        break;

      default:
        if ((a + b) <= c) {
          throw new Error(error);
        }
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const semiperimeter: number = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(semiperimeter * ((semiperimeter - this.a)
    * (semiperimeter - this.b) * (semiperimeter - this.c)))
      .toFixed(2);
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    validateSides(radius);

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public heigh: number,
  ) {
    validateSides(width, heigh);

    this.color = color;
    this.width = width;
    this.heigh = heigh;
  }

  getArea(): number {
    return this.width * this.heigh;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
