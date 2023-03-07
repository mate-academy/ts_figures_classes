enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

function roundingArea(area: number): number {
  return Math.floor(area * 100) / 100;
}

function checkValidSidesValue(...parametres: number[]): void {
  if (parametres.some((parameter) => parameter <= 0)) {
    throw new Error('Every parameter must be bigger than 0');
  }
}

export interface Figure {
  shape : Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  readonly shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number = 0,
    public b: number = 0,
    public c: number = 0,
  ) {
    checkValidSidesValue(a, b, c);

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error(
        'The longest side must be bigger than or equal to a sum of others',
      );
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c),
    );

    return roundingArea(area);
  }
}

export class Circle implements Figure {
  readonly shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number = 0,
  ) {
    checkValidSidesValue(radius);
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return roundingArea(area);
  }
}

export class Rectangle implements Figure {
  readonly shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number = 0,
    public height: number = 0,
  ) {
    checkValidSidesValue(width, height);
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundingArea(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
