export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number
}

export function roundToHundredths(uglyNumber: number): number {
  return Math.floor(uglyNumber * 100) / 100;
}

export function errorChecker(...sizes: number[]): void {
  if (sizes.some((size) => size <= 0)) {
    switch (sizes.length) {
      case 3:
        throw new Error('You entered wrong side sizes! '
        + 'All sizes have to be greater than 0!');
      case 2:
        throw new Error('Enter both width and height sizes greater than 0!');
      case 1:
        throw new Error('Enter correct radius, greater than 0!');
      default:
        throw new Error('No, no! This is not so rigth!');
    }
  }
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle ;

  getArea(): number {
    const semiperimeter: number = (this.a + this.b + this.c) / 2;

    const area
      = Math.sqrt(semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c));

    return roundToHundredths(area);
  }

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    errorChecker(a, b, c);

    if (((a + b) <= c) || ((a + c) <= b) || ((c + b) <= a)) {
      throw new Error('Oh no! This is not rigth! '
        + 'I can not form a triangle!'
        + 'The longest side of a triangle has to be '
        + 'less than a sum of two others!');
    }
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return roundToHundredths(area);
  }

  constructor(
    public color: Color,
    public radius: number,
  ) {
    errorChecker(radius);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  getArea(): number {
    return this.width * this.heigth;
  }

  constructor(
    public color: Color,
    public width: number,
    public heigth: number,
  ) {
    errorChecker(width, heigth);
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
