type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number | string;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
    public shape: Shape = 'triangle',
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Side lengths must be greater than zero.');
    }

    if (
      sideA + sideB <= sideC ||
      sideA + sideC <= sideB ||
      sideB + sideC <= sideA
    ) {
      throw new Error(
        'The provided side lengths do not form a valid triangle.',
      );
    }
  }

  getArea(): number | string {
    const s = (this.sideA + this.sideB + this.sideC) / 2;

    const result = Math.sqrt(
      s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC),
    );

    return Number.isInteger(result) ? result : Math.trunc(result * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero.');
    }
  }

  getArea(): number | string {
    const result = this.radius ** 2 * Math.PI;

    return Number.isInteger(result) ? result : Math.trunc(result * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than zero.');
    }
  }

  getArea(): number | string {
    const result = this.width * this.height;

    return Number.isInteger(result) ? result : Math.trunc(result * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
