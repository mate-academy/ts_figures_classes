type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  constructor(
    public color: Color,
    public readonly side1: number,
    public readonly side2: number,
    public readonly side3: number,
  ) {
    if (
      side1 <= 0 ||
      side2 <= 0 ||
      side3 <= 0 ||
      side1 + side2 <= side3 ||
      side1 + side3 <= side2 ||
      side2 + side3 <= side1
    ) {
      throw new Error('Invalid triangle side lengths');
    }
  }

  getArea(): number {
    const s = (this.side1 + this.side2 + this.side3) / 2;

    return Math.sqrt(
      s * (s - this.side1) * (s - this.side2) * (s - this.side3),
    );
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid circle radius');
    }
  }

  getArea(): number {
    return parseFloat(
      (Math.floor(Math.PI * this.radius ** 2 * 100) / 100).toFixed(2),
    );
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle dimensions');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${
    Number.isInteger(figure.getArea())
      ? figure.getArea()
      : figure.getArea().toFixed(2)
  }`;
}
