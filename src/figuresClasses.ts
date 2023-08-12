type Shape = 'triangle'| 'circle' | 'rectangle';
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
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('All sides must be positive numbers.');
    }

    if (sideA + sideB <= sideC
      || sideA + sideC <= sideB
      || sideB + sideC <= sideA) {
      throw new Error('Invalid sides for a triangle.');
    }
    this.shape = 'triangle';
  }

  shape: 'triangle';

  getArea(): number {
    const s = (this.sideA + this.sideB + this.sideC) / 2;

    return Math.sqrt(
      s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC),
    );
  }
}

export class Circle implements Figure {
  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number.');
    }
    this.shape = 'circle';
  }

  shape: 'circle';

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers.');
    }
    this.shape = 'rectangle';
  }

  shape: 'rectangle';

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
