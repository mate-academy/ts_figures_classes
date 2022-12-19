export enum FigureType {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export enum FigureColor {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: FigureType;
  color: FigureColor;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: FigureType = FigureType.Triangle;

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sidesArePositive = a > 0 && b > 0 && c > 0;
    const hypotenuseIsValid = a + b > c && b + c > a && c + a > b;

    if (!sidesArePositive) {
      throw new Error('All sides of a triangle mush be positive numbers');
    }

    if (!hypotenuseIsValid) {
      throw new Error('The longest side of a triangle must be smaller'
      + 'than a sum of two others');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.trunc(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: FigureType = FigureType.Circle;

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius of a circle mush be a positive number');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.trunc(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: FigureType = FigureType.Rectangle;

  constructor(
    public color: FigureColor,
    public width: number,
    public height: number,
  ) {
    const sidesArePositive = width > 0 && height > 0;

    if (!sidesArePositive) {
      throw new Error('Both sides of a rectangle mush be positive numbers');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.trunc(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
