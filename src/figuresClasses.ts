export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    this.shape = 'triangle';

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

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

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

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

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
