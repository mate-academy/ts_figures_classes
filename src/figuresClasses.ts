type ColorType = 'red' | 'green' | 'blue';

export interface Figure {
  shape: string,
  color: ColorType,
  getArea(): number;
}

export class Triangle {
  shape = 'triangle';

  constructor(
    public color: ColorType,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side of a triangle cannot be negative or 0');
    }

    if (a + b <= c || c + b <= a || c + a <= b) {
      throw new Error('This figure cannot be a triangle');
    }
  }

  getArea(): number {
    const pp = 1 / 2 * (this.a + this.b + this.c);
    const s = pp * (pp - this.a) * (pp - this.b) * (pp - this.c);
    const res: number = Math.sqrt(s);

    return +res.toFixed(2);
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: ColorType,
    public radius: number,
  ) {
    if (radius < 0) {
      throw new Error('Radius cannot be negative');
    }
  }

  getArea(): number {
    return Math.floor(100 * Math.PI * this.radius ** 2) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: ColorType,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Side of a rectangle cannot be negative or 0');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
