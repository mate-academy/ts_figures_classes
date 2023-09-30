type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function isPositiveNumber(figure: object): never | void {
  const numbers = Object.values(figure);

  numbers.forEach((number): void => {
    if (number <= 0) {
      throw new Error('Should be a positive number');
    }
  });
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    isPositiveNumber(this);

    const max = Math.max(sideA, sideB, sideC);

    if (max >= sideA + sideB + sideC - max) {
      throw new Error('Sides 1, 2, and 3 can\'t form a triangle');
    }
  }

  getArea(): number {
    const s = (this.sideA + this.sideB + this.sideC) / 2;
    const area = Math.sqrt(s * (s - this.sideA)
      * (s - this.sideB) * (s - this.sideC));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    isPositiveNumber(this);
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    isPositiveNumber(this);
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
