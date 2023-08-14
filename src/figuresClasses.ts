export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle';

  color: 'red' | 'green' | 'blue';

  sideA: number;

  sideB: number;

  sideC: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    sideA: number,
    sideB: number,
    sideC: number,
  ) {
    if (
      sideA <= 0 || sideB <= 0 || sideC <= 0
    ) {
      throw new Error('All sides should be positive numbers!');
    }

    if (
      sideA + sideB <= sideC
      || sideB + sideC <= sideA
      || sideC + sideA <= sideB
    ) {
      throw new Error('It is not a triangle!');
    }

    this.shape = 'triangle';
    this.color = color;
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  getArea(): number {
    const s = (this.sideA + this.sideB + this.sideC) / 2;
    const multipliedSides = (
      s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC)
    );

    return Math.floor(Math.sqrt(multipliedSides) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle';

  color: 'red' | 'green' | 'blue';

  radius: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('All sides should be positive numbers!');
    }
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  color: 'red' | 'green' | 'blue';

  width: number;

  height: number;

  constructor(
    color: 'red' | 'green' | 'blue',
    width: number,
    height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('All sides should be positive numbers!');
    }
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
