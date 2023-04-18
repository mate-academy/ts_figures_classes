export interface Figure {
  shape: string;
  color: string;

  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides <= 0');
    }

    if ((a + b <= c) || (a + c <= b) || (c + b <= a)) {
      throw new Error('one side is greater than the sum of the other two');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    const s: number = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.round(s * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius <= 0');
    }
  }

  getArea(): number {
    const s = Math.PI * (this.radius ** 2);

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public height: number,
    public width: number,
  ) {
    if ((height <= 0) || (width <= 0)) {
      throw new Error('Sides <= 0');
    }
  }

  getArea(): number {
    return Math.round(this.height * this.width);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
