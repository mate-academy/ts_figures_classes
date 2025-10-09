export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error(
        `Side lengths must be > 0; received a=${sideA}, b=${sideB}, c=${sideC}`,
      );
    }

    const maxSide = Math.max(sideA, sideB, sideC);
    const sumOfOtherSides = sideA + sideB + sideC - maxSide;

    if (maxSide >= sumOfOtherSides) {
      throw new Error(`Sides 1, 2 and 3 can't form a triangle`);
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
  public shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Radius length must be > 0; received radius=${radius}`);
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public sideA: number,
    public sideB: number,
  ) {
    if (sideA <= 0 || sideB <= 0) {
      throw new Error(
        `Side lengths must be > 0; received a=${sideA}, b=${sideB}`,
      );
    }
  }

  getArea(): number {
    return Math.floor(this.sideA * this.sideB * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
