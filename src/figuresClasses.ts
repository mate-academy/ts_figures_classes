export interface Figure {
  shape: string;
  color: string;
  getArea: () => number;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
    public shape = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('your error message');
    }

    const abc = [a, b, c];
    const max = Math.max(...abc);
    const sum = abc.reduce((calc, side) => {
      if (side === max) {
        return calc;
      }

      return calc + side;
    });

    if (sum <= max) {
      throw new Error('impossible triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const foolArea = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(foolArea * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
    public shape = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('length <= 0');
    }
  }

  getArea(): number {
    const foolArea = Math.PI * (this.radius ** 2);

    return Math.floor(foolArea * 100) / 100;
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
      throw new Error('length <= 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
