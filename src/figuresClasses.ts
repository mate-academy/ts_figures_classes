type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
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

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
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

  constructor(
    public color:Color,
    public width: number,
    public length: number,
  ) {
    this.checkIfValid();
  }

  checkIfValid(): void {
    if (this.width <= 0 || this.length <= 0) {
      throw new Error('Please, enter valid sides size');
    }
  }

  getArea(): number {
    const area = this.length * this.width;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
