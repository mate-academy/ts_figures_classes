export interface Figure {
  shape: string;
  color: 'red' | 'green' | 'blue';
  getArea():number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Parameters can not be less than 0');
    }

    if (a >= (b + c) || b >= (a + c) || c >= (a + b)) {
      throw new Error('These parameters can not form the triangle');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) * 0.5;
    const square: number
      = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.trunc(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Parameters can not be less than 0');
    }
  }

  getArea():number {
    const square: number = Math.PI * this.radius ** 2;

    return Math.trunc(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Parameters can not be less than 0');
    }
  }

  getArea():number {
    const square: number = this.width * this.height;

    return Math.trunc(square * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
