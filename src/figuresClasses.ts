export interface Figure {
  color: string | 'green' | 'red' | 'blue';
  shape: string | 'triangle' | 'circle' | 'rectangle';

  getArea() : number;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
    public shape: string = 'triangle',
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Error number is negative');
    }

    if (this.c >= (this.b + this.a)) {
      throw new Error('Error the longest side less sum');
    }
  }

  getArea(): number {
    const res = (this.a + this.b + this.c) / 2;
    const num = Math.sqrt(
      res * (res - this.a) * (res - this.b)
      * (res - this.c),
    );

    return +num.toFixed(2);
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
    public shape: string = 'circle',
  ) {
    if (radius < 0) {
      throw new Error('Error number is negative');
    }
  }

  getArea(): number {
    const res = (Math.PI * this.radius ** 2);

    return Math.floor(res * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
    public shape: string = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Error number is negative');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
