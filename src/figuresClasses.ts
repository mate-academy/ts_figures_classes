export interface Figure {
  color: 'red' | 'green' | 'blue',
  shape: 'triangle' | 'circle' | 'rectangle',
  getArea(): number,
}

export class Triangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
    public shape: 'triangle' | 'circle' | 'rectangle',
  ) {
    this.shape = 'triangle';

    if (a < 1 || b < 1 || c < 1) {
      throw new Error('Not valid input');
    }

    if (c >= a + b) {
      throw new Error('Not a triangle');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return Math.floor(Math
      .sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
    public shape: 'triangle' | 'circle' | 'rectangle',
  ) {
    this.shape = 'circle';

    if (radius < 1) {
      throw new Error('Not valid input');
    }
  }

  getArea(): number {
    return Math.floor(this.radius ** 2 * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public heigth: number,
    public shape: 'triangle' | 'circle' | 'rectangle',
  ) {
    this.shape = 'rectangle';

    if (width < 1 || heigth < 1) {
      throw new Error('Not a rectangle');
    }
  }

  getArea(): number {
    return this.width * this.heigth;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
