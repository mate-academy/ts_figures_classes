
type Colors = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Colors;
  shape: Shape;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Colors,
    public sideA: number,
    public sideB: number,
    public sideC: number,

  ) {
    if (this.sideA <= 0 || this.sideB <= 0 || this.sideC <= 0) {
      throw new Error('Inccorect values');
    }

    if (Math.max(sideA, sideB, sideC) >= (
      (sideA + sideB + sideC) - (Math.max(sideA, sideB, sideC)))
    ) {
      throw new Error('Inccorect values');
    }
  }

  getArea(): number {
    const s = (this.sideA + this.sideB + this.sideC) / 2;
    const squa = Math
      .sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));

    return +squa.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Inccorect values');
    }
  }

  getArea(): number {
    const circleArea = Math.PI * this.radius * this.radius;

    return Math.floor(circleArea * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Inccorect values');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

type Figures = Rectangle | Circle | Triangle;

export function getInfo(figure: Figures): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
