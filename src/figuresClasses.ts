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
    if ([a, b, c].some((side) => side <= 0)) {
      throw new Error('Side a must be greater than 0');
    }

    const longestSide = Math.max(a, b, c);
    const otherSidesSum = a + b + c - longestSide;

    if (longestSide >= otherSidesSum) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  public getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
    public shape = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  public getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
    public shape = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  public getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
