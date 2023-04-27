export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    const longestSide = Math.max(a, b, c);
    const sum = a + b + c;

    if ((a <= 0 || b <= 0 || c <= 0) || longestSide >= (sum - longestSide)) {
      throw new Error('Invalid triangle sides');
    }
  }

  getArea(): number {
    const sP: number = (this.a + this.b + this.c) / 2;

    const area: number
      = Math.sqrt(sP * (sP - this.a) * (sP - this.b) * (sP - this.c));

    return Math.trunc(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid circle radius');
    }
  }

  getArea(): number {
    const area: number = Math.PI * (this.radius * this.radius);

    return Math.trunc(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle sides');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Math.trunc(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
