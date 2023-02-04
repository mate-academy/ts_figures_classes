function hasIncorrectSize(...sizes: number[]): boolean {
  return sizes.some((size) => size <= 0);
}

type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (hasIncorrectSize(this.sideA, this.sideB, this.sideC)) {
      throw new Error('Triangle\'s side size is incorrect');
    }

    const longestSide = Math.max(this.sideA, this.sideB, this.sideC);
    const oppositeSides = (this.sideA + this.sideB + this.sideC) - longestSide;

    if (longestSide >= oppositeSides) {
      throw new Error('Not a triangle!');
    }
  }

  getArea(): number {
    const p: number = (this.sideA + this.sideB + this.sideC) / 2;
    const s: number = Math.sqrt(
      p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC),
    );

    return +s.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (hasIncorrectSize(this.radius)) {
      throw new Error('Circle\'s radius is incorrect');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (hasIncorrectSize(this.width, this.height)) {
      throw new Error('Rectangle\'s side size is incorrect');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
