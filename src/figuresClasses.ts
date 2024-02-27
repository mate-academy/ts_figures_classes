type Colors = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'rectangle' | 'circle';

export interface Figure {
  shape: Shape;
  color: Colors;
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
      throw new Error('All sides must be greater than 0');
    }

    const longestSide = Math.max(this.sideA, this.sideB, this.sideC);

    if (longestSide >= this.sideA + this.sideB + this.sideC - longestSide) {
      // eslint-disable-next-line max-len
      throw new Error('The longest side must be less than the sum of the other two sides');
    }
  }

  getArea(): number {
    const s = (this.sideA + this.sideB + this.sideC) / 2;
    // eslint-disable-next-line max-len
    const area = Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
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
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
