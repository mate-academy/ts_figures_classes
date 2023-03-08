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

export function areCorrectLengths(...lengths: number[]): boolean {
  return lengths.every((length: number) => length > 0);
}

export function isTriangleOk(...sides: number[]): boolean {
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
    if (!areCorrectLengths(a, b, c) || !isTriangleOk(a, b, c)) {
      throw new Error('Wrong side length!');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiperimeter = (a + b + c) / 2;
    const area = Math.sqrt(
      semiperimeter
      * (semiperimeter - a)
      * (semiperimeter - b)
      * (semiperimeter - c),
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
    if (!areCorrectLengths(radius)) {
      throw new Error('Wrong radius!');
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
    if (!areCorrectLengths(width, height)) {
      throw new Error('Wrong side length!');
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
