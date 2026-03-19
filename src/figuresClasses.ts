export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

type Color = 'red' | 'green' | 'blue';

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: Color,
    private sideA: number,
    private sideB: number,
    private sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('All sides must be positive');
    }

    if (
      sideA + sideB <= sideC ||
      sideA + sideC <= sideB ||
      sideB + sideC <= sideA
    ) {
      throw new Error('Invalid triangle sides');
    }
    this.color = color;
  }

  getArea(): number {
    const s = (this.sideA + this.sideB + this.sideC) / 2;

    return Math.sqrt(
      s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC),
    );
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius must be positive');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.trunc(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const area = Math.round(figure.getArea() * 100) / 100;

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
