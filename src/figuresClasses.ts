export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    const sumAB: number = this.a + this.b;
    const sumAC: number = this.a + this.c;
    const sumBC: number = this.b + this.c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Triangle sides must be positive numbers.');
    }

    if (this.a >= sumAC || this.b >= sumBC || this.c >= sumAB) {
      throw new Error('Triangle inequality violated: one side is too long.');
    }
  }

  getArea(): number {
    const per: number = (this.a + this.b + this.c) / 2;
    const square: number =
      per * (per - this.a) * (per - this.b) * (per - this.c);

    return Math.trunc(Math.sqrt(square) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error('Circle radius must be a positive number.');
    }
  }

  getArea(): number {
    return Math.trunc(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Rectangle dimensions must be positive numbers.');
    }
  }

  getArea(): number {
    return Math.trunc(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
