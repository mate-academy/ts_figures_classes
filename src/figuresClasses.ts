export interface Figure {
  shape: string;
  color: string;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  color: string;

  sideA: number;

  sideB: number;

  sideC: number;

  constructor(color: string, a: number, b: number, c: number) {
    this.color = color;
    this.sideA = a;
    this.sideB = b;
    this.sideC = c;

    if (
      this.sideA <= 0 ||
      this.sideB <= 0 ||
      this.sideC <= 0 ||
      this.sideA + this.sideB <= this.sideC ||
      this.sideA + this.sideC <= this.sideB ||
      this.sideB + this.sideC <= this.sideA
    ) {
      throw new Error('Triangle cannot exist!');
    }
  }

  getArea(): number {
    const s = (this.sideA + this.sideB + this.sideC) / 2;

    const area = Math.sqrt(
      s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  color: string;

  radius: number;

  constructor(color: string, radius: number) {
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('Radius cannot be 0!');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  color: string;

  width: number;

  height: number;

  constructor(color: string, width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Length cannot be 0!');
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
