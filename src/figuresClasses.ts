export interface Figure {
  shape: string;
  color: string;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || c >= a + b) {
      throw new Error('Error! This is not triangle');
    }
  }

  shape = 'triangle';

  getArea(): number {
    const p = 0.5 * (this.a + this.b + this.c);

    const square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return parseFloat(square.toFixed(3).slice(0, -1));
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Error! This is not a circle');
    }
  }

  shape = 'circle';

  getArea(): number {
    const area = (this.radius ** 2 * Math.PI).toFixed(3).slice(0, -1);

    return parseFloat(area);
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Error! This is not rectangle');
    }
  }

  shape = 'rectangle';

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Triangle|Circle|Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
