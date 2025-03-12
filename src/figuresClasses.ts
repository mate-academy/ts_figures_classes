export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public readonly shape = 'triangle';

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: string,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Error');
    }

    const maxSize: number[] = [sideA, sideB, sideC].sort(
      (a: number, b: number) => a - b,
    );

    if (maxSize[0] + maxSize[1] <= maxSize[2]) {
      throw new Error('dd');
    }
  }

  public getArea(): number {
    const p = (this.sideA + this.sideB + this.sideC) / 2;
    const res = Math.sqrt(
      p * (p - this.sideA) * (p - this.sideB) * (p - this.sideC),
    );

    return Math.floor(res * 100) / 100;
  }
}

export class Circle implements Figure {
  public readonly shape = 'circle';

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius');
    }
  }

  public getArea(): number {
    return Math.floor(Math.pow(this.radius, 2) * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public readonly shape = 'rectangle';

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Don`t valid params to RECTANGLE');
    }
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
