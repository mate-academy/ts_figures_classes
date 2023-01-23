// import { strict } from "assert";

export interface Figure {
  color: string;
  shape: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (this.sideC >= this.sideA + this.sideB
        || this.sideA <= 0
        || this.sideB <= 0
        || this.sideC <= 0) {
      throw new Error(`
        throws an error: sides ${this.sideA},
        ${this.sideB} and ${this.sideC} can't form a triangle
      `);
    }
  }

  getArea(): number {
    const p = 1 / 2 * (this.sideA + this.sideB + this.sideC);
    const area = Math.sqrt(p * (p - this.sideA)
    * (p - this.sideB) * (p - this.sideC));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Невозможно создать экземпляр класса Circle');
    }
  }

  getArea(): number {
    const radius = Math.PI * this.radius ** 2;

    return (Math.floor(radius * 100) / 100);
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Невозможно создать экземпляр класса Rectangle');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
