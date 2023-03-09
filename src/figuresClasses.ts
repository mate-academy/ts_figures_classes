enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

enum FigureType {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  color: Color;
  shape: FigureType;
  getArea(): number;
}

function RoundingToHundredths(number: number): number {
  return Math.floor(number * 100) / 100;
}

function checkValue(...sides: number[]): boolean {
  if (sides.some((side) => side <= 0)) {
    return true;
  }

  if (sides.length === 3) {
    const [a, b, c] = sides;

    if (a + b <= c || a + c <= b || b + c <= a) {
      return true;
    }
  }

  return false;
}

export class Triangle implements Figure {
  readonly shape = FigureType.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (checkValue(a, b, c)) {
      throw new Error('Impossible to build a triangle with given sides');
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      halfPerimeter
       * (halfPerimeter - this.a)
       * (halfPerimeter - this.b)
       * (halfPerimeter - this.c),
    );

    return RoundingToHundredths(area);
  }
}

export class Circle implements Figure {
  readonly shape = FigureType.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (checkValue(radius)) {
      throw new Error('Impossible to build a circle with given sides');
    }
  }

  getArea(): number {
    return RoundingToHundredths(Math.PI * this.radius * this.radius);
  }
}

export class Rectangle implements Figure {
  readonly shape = FigureType.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (checkValue(width, height)) {
      throw new Error('Impossible to build a rectangle with given sides');
    }
  }

  getArea(): number {
    return RoundingToHundredths(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
