export interface Figure {
  shape: string;
  color: string;
  getArea: Function;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: string,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    this.check();
  }

  private check(): void {
    if (this.sideA < 1 || this.sideB < 1 || this.sideC < 1) {
      throw new Error('Negative side is not acceptable!');
    }

    const sumSides = this.sideA + this.sideB + this.sideC;

    if ([this.sideA, this.sideB, this.sideC].some((el) => sumSides / el <= 2)) {
      throw new Error('Side Sizes are invalid for construct Triangles');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.sideA + this.sideB + this.sideC) / 2;

    return Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.sideA) *
        (semiPerimeter - this.sideB) *
        (semiPerimeter - this.sideC),
    );
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public rad: number,
  ) {
    this.check();
  }

  private check(): void {
    if (this.rad < 0) {
      throw new Error('Invalid diameter of');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.rad ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public sideA: number,
    public sideB: number,
  ) {
    this.check();
  }

  private check(): void {
    if (this.sideA < 0 || this.sideB < 0) {
      throw new Error('Sides are not Valid!');
    }
  }

  getArea(): number {
    return this.sideA * this.sideB;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${Math.round(figure.getArea() * 100) / 100}`;
}
