
export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c
      || a + c <= b || b + c <= a) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    const area: number = Math.sqrt(s * (s - this.a)
    * (s - this.b) * (s - this.c));

    return +(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return +Math.trunc((Math.PI * (this.radius * this.radius) * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public width: number,
    public heigth: number,
  ) {
    this.shape = 'rectangle';

    if (heigth <= 0 || width <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return +(this.width * this.heigth).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
