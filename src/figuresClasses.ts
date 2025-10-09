export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Incorrect length');
    }

    const maxSide = Math.max(sideA, sideB, sideC);
    const sumOfOtherSides = sideA + sideB + sideC - maxSide;

    if (maxSide >= sumOfOtherSides) {
      throw new Error('Such a triangle cannot exist');
    }
  }

  getArea(): number {
    const s =
      Math.floor(((this.sideA + this.sideB + this.sideC) / 2) * 100) / 100;

    return (
      Math.floor(
        Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC)) *
          100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Incorrect length');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public sideA: number,
    public sideB: number,
  ) {
    if (sideA <= 0 || sideB <= 0) {
      throw new Error('Incorrect length');
    }
  }

  getArea(): number {
    return this.sideA * this.sideB;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
