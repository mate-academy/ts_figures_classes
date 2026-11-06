export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
    public shape = 'triangle',
  ) {
    this.a = a;
    this.b = b;
    this.c = c;

    if ([a, b, c].some((side) => side <= 0)) {
      throw new Error('your error message');
    }

    const longestSide = Math.max(a, b, c);
    const otherSidesSum = a + b + c - longestSide;

    if (longestSide >= otherSidesSum) {
      throw new Error('your error message');
    }
  }

  public getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public r: number,
    public shape = 'circle',
  ) {
    this.r = r;

    if (r <= 0) {
      throw new Error('your error message');
    }
  }

  public getArea(): number {
    return Number((Math.PI * Math.pow(this.r, 2)).toFixed(2));
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
    public shape = 'rectangle',
  ) {
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  const formattedArea = Number.isInteger(area) ? String(area) : area.toFixed(2);

  return `A ${figure.color} ${figure.shape} - ${formattedArea}`;
}
