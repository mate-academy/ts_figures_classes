export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  color: Color;

  sideA: number;

  sideB: number;

  sideC: number;

  constructor(
    color: Color,
    sideA: number,
    sideB: number,
    sideC: number,
  ) {
    this.shape = 'triangle';
    this.color = color;
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;

    if (!(this.sideA > 0 && this.sideB > 0 && this.sideC > 0)) {
      throw new Error('Sides of a triangle must be positive numbers!');
    }

    if (!(this.sideA + this.sideB > this.sideC
      && this.sideA + this.sideC > this.sideB
      && this.sideB + this.sideC > this.sideA
    )) {
      throw new Error('The provided sides can not form a triangle!');
    }
  }

  getArea(): number {
    const sp = (this.sideA + this.sideB + this.sideC) / 2;

    const area = Math.sqrt(sp
      * (sp - this.sideA)
      * (sp - this.sideB)
      * (sp - this.sideC));

    return Math.round((area + Number.EPSILON) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  color: Color;

  radius: number;

  constructor(
    color: Color,
    radius: number,
  ) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('The radius must be a positive number!');
    }
  }

  getArea(): number {
    return Math.floor(this.radius ** 2 * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  color: Color;

  width: number;

  height: number;

  constructor(
    color: Color,
    width: number,
    height: number,
  ) {
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('The both sides must be positive numbers!');
    }
  }

  getArea(): number {
    return Math.round((this.height * this.width + Number.EPSILON) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
