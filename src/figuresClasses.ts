export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export function isValidLength(...lengths: number[]): boolean {
  return lengths.every((length: number) => length > 0);
}

export function isValidTriangle(...sides: number[]): boolean {
  sides.sort((sideA: number, sideB: number) => sideB - sideA);

  return sides[0] < sides[1] + sides[2];
}

export function roundToHundredths(number: number): number {
  return Math.floor(number * 100) / 100;
}

export class Triangle implements Figure {
  readonly shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!isValidLength(a, b, c) || !isValidTriangle(a, b, c)) {
      throw new Error('Invalid length!');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiPerimeter = (a + b + c) / 2;
    const area = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - a)
      * (semiPerimeter - b)
      * (semiPerimeter - c),
    );

    return roundToHundredths(area);
  }
}

export class Circle implements Figure {
  readonly shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (!isValidLength(radius)) {
      throw new Error('Invalid radius!');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return roundToHundredths(area);
  }
}

export class Rectangle implements Figure {
  readonly shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (!isValidLength(width, height)) {
      throw new Error('Invalid side length!');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundToHundredths(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
