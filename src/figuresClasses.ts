type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color
  getArea(): number;
}

export class Triangle implements Figure {
  color: Color;

  shape: Shape;

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
    this.checkIfValid();
  }

  checkIfValid(): void {
    const sides = [this.sideA, this.sideB, this.sideC];
    const sidesSum = sides.reduce((sum, currentSide) => (
      sum + currentSide
    ), 0);
    const maxSide = Math.max(...sides);

    if (sidesSum - maxSide <= maxSide
      || sides.some((side: number) => side <= 0)) {
      throw new Error('Please, enter valid side size');
    }
  }

  getArea(): number {
    const semiPerimetr: number
      = (this.sideA + this.sideB + this.sideC) / 2;

    const area: number
      = Math.sqrt(semiPerimetr * (semiPerimetr - this.sideA)
      * (semiPerimetr - this.sideB) * (semiPerimetr - this.sideC));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  color: Color;

  shape: Shape;

  radius: number;

  constructor(
    color: Color,
    radius: number,
  ) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
    this.checkIfValid();
  }

  checkIfValid(): void {
    if (this.radius <= 0) {
      throw new Error('Please, enter valid radius size');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  color: Color;

  width: number;

  length: number;

  constructor(
    color:Color,
    width: number,
    length: number,
  ) {
    this.color = color;
    this.width = width;
    this.length = length;
    this.checkIfValid();
  }

  checkIfValid(): void {
    if (this.width <= 0 || this.length <= 0) {
      throw new Error('Please, enter valid sides size');
    }
  }

  getArea(): number {
    const area = this.length * this.width;

    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
