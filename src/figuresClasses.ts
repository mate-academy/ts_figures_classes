export interface Figure {
  color: String;
}

export class Triangle implements Figure {
  shape: string;

  color: string;

  sideA: number;

  sideB: number;

  sideC: number;

  constructor(color: string, sideA: number,
    sideB: number, sideC: number) {
    this.shape = 'Triangle';
    this.color = color;
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;

    const orderedSide = [this.sideA, this.sideB, this.sideC]
      .sort((a, b) => b - a);

    if (orderedSide[0] >= (orderedSide[1] + orderedSide[2])
        || (this.sideA <= 0 || this.sideB <= 0 || this.sideC <= 0)) {
      throw new Error('Invalid lengths');
    }
  }

  getArea(): number {
    const semiPer = (this.sideA + this.sideB + this.sideC) / 2;

    return Math.floor(Math.sqrt(semiPer * (semiPer - this.sideA)
    * (semiPer - this.sideB) * (semiPer - this.sideC)) * 100) / 100;
  }

  getInfo(): string {
    return `A ${this.color} Triangle - ${this.getArea()}`;
  }
}

export class Circle implements Figure {
  shape: string;

  color: string;

  radius: number;

  constructor(color: string, radius: number) {
    this.shape = 'Circle';
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Invalid length');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius * this.radius) * 100) / 100;
  }

  getInfo(): string {
    return `A ${this.color} Triangle - ${this.getArea()}`;
  }
}

export class Rectangle implements Figure {
  shape: string;

  color: string;

  width: number;

  height: number;

  constructor(color: string, width: number, height: number) {
    this.shape = 'Rectangle';
    this.color = color;
    this.width = width;
    this.height = height;

    if (height <= 0 || width <= 0) {
      throw new Error('Invalid lengths');
    }
  }

  getArea(): number {
    return parseFloat((this.height * this.width).toFixed(2));
  }

  getInfo(): string {
    return `A ${this.color} Triangle - ${this.getArea()}`;
  }
}

export function getInfo(figure: Figure): string {
  return typeof figure;
}
