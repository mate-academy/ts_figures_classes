type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes,
  color: Colors,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    private side1: number,
    private side2: number,
    private side3: number,
  ) {
    const sum = side1 + side2 + side3;
    const max = Math.max(side1, side2, side3);
    const diff = sum - max;

    if ([side1, side2, side3].some((item) => item <= 0)
      || diff <= max) {
      throw new Error('error');
    }
  }

  getArea(): number {
    const p = 0.5 * (this.side1 + this.side2 + this.side3);
    const area = Math.sqrt(
      p * (p - this.side1) * (p - this.side2) * (p - this.side3),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('error');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('error');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
