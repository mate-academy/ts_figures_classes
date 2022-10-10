export interface Figure {
  shape: string,
  color: string,
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    const longestSide = Math.max(sideA, sideB, sideC);
    const sumShorterSide = [sideA, sideB, sideC]
      .filter((side) => side !== longestSide)
      .reduce((prev, current) => prev + current, 0);

    if (this.sideA <= 0 || this.sideB <= 0 || this.sideC <= 0
      || longestSide >= sumShorterSide) {
      throw new Error('Incorrect figure dimensions');
    }
  }

  getArea(): number {
    const p: number = (this.sideA + this.sideB + this.sideC) / 2;

    return Math.floor(Math.sqrt(p
      * (p - this.sideA) * (p - this.sideB) * (p - this.sideC)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Incorrect figure dimensions');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public hieght: number,
  ) {
    if (this.width <= 0 || this.hieght <= 0) {
      throw new Error('Incorrect figure dimensions');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.hieght * 100) / 100;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
