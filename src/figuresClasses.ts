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
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Parameters must be greater than 0');
    }

    if (
      this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.c + this.b <= this.a

    ) {
      throw new Error(`It is not possible
       to construct a triangle with these sides`);
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(p * ((p - this.a) * (p - this.b) * (p - this.c)));

    return +(s).toFixed(2);
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(public color: string, public radius: number) {
    if (this.radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const s = Math.PI * this.radius ** 2;

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Parameters must be greater than 0');
    }
  }

  getArea(): number {
    const s = this.width * this.height;

    return +Math.floor(s).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
