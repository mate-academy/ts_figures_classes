type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
    public side1: number,
    public side2: number,
    public side3: number,
    public shape: Shape = 'triangle',
  ) {}

  getArea(): number {
    if (
      this.side1 + this.side2 > this.side3 &&
      this.side1 + this.side3 > this.side2 &&
      this.side2 + this.side3 > this.side1 &&
      this.side1 > 0 &&
      this.side2 > 0 &&
      this.side3 > 0
    ) {
      const p = (this.side1 + this.side2 + this.side3) / 2;

      return Math.sqrt(
        p * (p - this.side1) * (p - this.side2) * (p - this.side3),
      );
    } else {
      throw new Error('Triangle does not exist');
    }
  }
}

export class Circle implements Figure {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
    private radius: number,
    public shape: Shape = 'circle',
  ) {}

  getArea(): number {
    if (this.radius <= 0) {
      throw new Error('Radius must be positive');
    }

    return Math.PI * Math.pow(this.radius, 2);
  }
}

export class Rectangle implements Figure {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
    private width: number,
    private height: number,
    public shape: Shape = 'rectangle',
  ) {}

  getArea(): number {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width and height must be positive');
    }

    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
