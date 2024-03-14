export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string;

  color: string;

  private sideA: number;

  private sideB: number;

  private sideC: number;

  constructor(color: string, sideA: number, sideB: number, sideC: number) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('your error message');
    }

    if (
      sideA + sideB <= sideC ||
      sideA + sideC <= sideB ||
      sideC + sideB <= sideA
    ) {
      throw new Error('your error message');
    }

    this.shape = 'triangle';
    this.color = color;
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  getArea(): number {
    const halfMeter = (this.sideA + this.sideB + this.sideC) / 2;

    const area = Math.sqrt(
      halfMeter *
        (halfMeter - this.sideA) *
        (halfMeter - this.sideB) *
        (halfMeter - this.sideC),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string;

  color: string;

  private radius: number;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('your error message');
    }

    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  color: string;

  private width: number;

  private height: number;

  constructor(color: string, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Method not implemented.');
    }
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
