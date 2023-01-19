type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

function checkIsNegative(...sides: number[]): boolean {
  return sides.some((side) => side <= 0);
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c];
    const sumOfSides = sides.reduce((sum, side) => sum + side, 0);
    const biggestSide = Math.max(...sides);
    const isBiggest = biggestSide >= sumOfSides - biggestSide;

    if (checkIsNegative(...sides)) {
      throw new Error('One of the sides is negative');
    }

    if (isBiggest) {
      throw new Error('One of the sides is bigger than the others together');
    }
  }

  getArea(): number {
    const semi = (this.a + this.b + this.c) / 2;
    const area
      = Math.sqrt(semi * (semi - this.a) * (semi - this.b) * (semi - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (checkIsNegative(radius)) {
      throw new Error('The radius is zero or less');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public height: number,
    public width: number,
  ) {
    if (checkIsNegative(height, width)) {
      throw new Error('One of the sides is negative');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
