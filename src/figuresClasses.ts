export interface Figure {
  shape: string;
  color: string;
  getArea: Function;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public sideA: number,
    public sideB: number,
    public sideC: number,
    public shape = 'triangle',
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Invalid parameters.');
    }

    const sides: number[] = [sideA, sideB, sideC].sort((a, b) => b - a);

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error(
        `sides ${sideA}, ${sideB} and ${sideC} can't form a triangle`,
      );
    }
  }

  getArea(): number {
    const semiper: number = (this.sideA + this.sideB + this.sideC) / 2;

    return +(
      (semiper *
        (semiper - this.sideA) *
        (semiper - this.sideB) *
        (semiper - this.sideC)) **
      0.5
    ).toFixed(2);
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
    public shape = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('Invalid parameters.');
    }
  }

  getArea(): number {
    const result: number = Math.PI * this.radius ** 2;

    // return +result.toFixed(2);

    return Math.floor(result * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
    public shape = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid parameters.');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;

  // return typeof figure;
}
