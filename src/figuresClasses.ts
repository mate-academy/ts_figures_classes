type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
    public shape: Shape = 'triangle',
  ) {
    if (
      this.sideA + this.sideB <= this.sideC ||
      this.sideA + this.sideC <= this.sideB ||
      this.sideB + this.sideC <= this.sideA
    ) {
      throw new Error(
        'the longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const semiPerimeter = (this.sideA + this.sideB + this.sideC) / 2;

    return Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.sideA) *
        (semiPerimeter - this.sideB) *
        (semiPerimeter - this.sideC),
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public answer: number,
    public shape: Shape = 'circle',
  ) {
    if (this.radius <= 0) {
      throw new Error('length is <= 0');
    }
  }

  getArea(): number {
    if ((Math.PI * this.radius ** 2) % 1 === 0) {
      return Math.PI * this.radius ** 2;
    }

    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape = 'rectangle',
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('width or height is <= 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area % 1 === 0 ? area : area.toFixed(2)}`;
}
