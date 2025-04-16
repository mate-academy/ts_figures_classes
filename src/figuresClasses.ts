type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  sideA: number;

  sideB: number;

  sideC: number;

  constructor(color: Color, sideA: number, sideB: number, sideC: number) {
    const sides = [sideA, sideB, sideC].sort((x, y) => y - x);
    const [longest, side2, side3] = sides;

    if (longest >= side2 + side3) {
      throw new Error('Invalid triangle sides');
    }

    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('The side must be greater than 0');
    }
    this.color = color;
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }

  getArea(): number {
    const p: number = (this.sideA + this.sideB + this.sideC) / 2;

    const area = Math.sqrt(
      p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC),
    );

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    if (height <= 0 || width <= 0) {
      throw new Error('Invalid rectangle sides');
    }
    this.color = color;
    this.height = height;
    this.width = width;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
