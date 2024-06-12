type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: string;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle';

  color: Color;

  sideA: number;

  sideB: number;

  sideC: number;

  constructor(color: Color, sideA: number, sideB: number, sideC: number) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('any length is <= 0');
    }

    if (
      sideA >= sideB + sideC ||
      sideB >= sideA + sideC ||
      sideC >= sideA + sideB
    ) {
      throw new Error(
        'the longest side of a triangle is >= than a sum of two others',
      );
    }
    this.shape = 'triangle';
    this.color = color;
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
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
  shape: 'circle';

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('radius must be > 0');
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
  shape: 'rectangle';

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('width and height must be > 0');
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
