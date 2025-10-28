type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function floorToHundredths(value: number): number {
  return Math.floor(value * 100) / 100;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public readonly shape: Shape = 'triangle',
  ) {
    const longestSide = Math.max(a, b, c);
    const sumOfTheOtherTwo = a + b + c - longestSide;

    if (longestSide >= sumOfTheOtherTwo || Math.min(a, b, c) <= 0) {
      throw new Error(
        'longestSide has to be lower than sumOfTheOtherTwo or one side is <= 0',
      );
    }
  }

  getArea(): number {
    const perimeter = (this.a + this.b + this.c) / 2;
    const triangleArea = Math.sqrt(
      perimeter *
        (perimeter - this.a) *
        (perimeter - this.b) *
        (perimeter - this.c),
    );

    return floorToHundredths(triangleArea);
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public readonly shape: Shape = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('radius must be higher than 0');
    }
  }

  getArea(): number {
    return floorToHundredths(this.radius * this.radius * Math.PI);
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public readonly shape: Shape = 'rectangle',
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('width or height must be more than 0');
    }
  }

  getArea(): number {
    return floorToHundredths(this.height * this.width);
  }
}

export function getInfo(figure: Figure): string {
  // return typeof figure;
  // 'A red rectangle - 15';

  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
