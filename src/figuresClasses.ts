export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string;

  color: string;

  constructor(
    color: string,
    private sideA: number,
    private sideB: number,
    private sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('All sides must be positive');
    }

    if (
      sideA + sideB <= sideC
      || sideA + sideC <= sideB
      || sideB + sideC <= sideA
    ) {
      throw new Error(
        'The longest side must be less than the sum of the other two sides',
      );
    }

    this.shape = 'triangle';
    this.color = color;
  }

  getArea(): number {
    const p = (this.sideA + this.sideB + this.sideC) / 2;

    const area = Math.sqrt(
      p * (p - this.sideA)
      * (p - this.sideB)
      * (p - this.sideC),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string;

  color: string;

  constructor(
    color: string,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be positive');
    }

    this.shape = 'circle';
    this.color = color;
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  color: string;

  constructor(
    color: string,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('All sides must be positive');
    }

    this.shape = 'rectangle';
    this.color = color;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
