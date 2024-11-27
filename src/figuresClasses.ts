export interface Figure {
  shape: string;
  color: string;

  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public sideA: number,
    public sideB: number,
    public sideC: number,
    public shape = 'triangle',
  ) {
    if (this.sideA <= 0 || this.sideB <= 0 || this.sideC <= 0) {
      throw new Error(`Sides must be positive numbers`);
    }

    if (
      sideA + sideB <= sideC ||
      sideA + sideC <= sideB ||
      sideB + sideC <= sideA
    ) {
      throw new Error('The side lengths do not form a valid triangle.');
    }
  }

  getArea(): number {
    const sValue: number = (this.sideA + this.sideB + this.sideC) / 2;

    const res = Math.sqrt(
      sValue *
        (sValue - this.sideA) *
        (sValue - this.sideB) *
        (sValue - this.sideC),
    );

    return Math.floor(res * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
    public shape = 'circle',
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must be a positive number');
    }
  }

  getArea(): number {
    const res: number = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(res * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
    public shape = 'rectangle',
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('width and height cannot form rectangle');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
