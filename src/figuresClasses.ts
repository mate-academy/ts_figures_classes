type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
  checkInitialData(): void;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private sideA: number,
    private sideB: number,
    private sideC: number,
  ) {
    this.checkInitialData();
  }

  checkInitialData(): void {
    if (this.sideA <= 0 || this.sideB <= 0 || this.sideC <= 0) {
      throw new Error('All sides should be > than zero!');
    }

    const sides: number[] = [this.sideA, this.sideB, this.sideC]
      .sort((side1: number, side2: number) => side2 - side1);

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error(
        'The longes side should be < then the sum of two others!',
      );
    }
  }

  getArea(): number {
    const semiperimeter = (this.sideA + this.sideB + this.sideC) / 2;

    return Math.round(Math.sqrt(
      semiperimeter * (semiperimeter - this.sideA)
        * (semiperimeter - this.sideB) * (semiperimeter - this.sideC),
    ) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    this.checkInitialData();
  }

  checkInitialData(): void {
    if (this.radius <= 0) {
      throw new Error('Radius should be > than zero!');
    }
  }

  getArea(): number {
    return Math.trunc(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    this.checkInitialData();
  }

  checkInitialData(): void {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Both sides should be > than zero!');
    }
  }

  getArea(): number {
    return Math.round((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
