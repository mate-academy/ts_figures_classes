export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

function roundDown(num: number): number {
  return Math.floor(num * 100) / 100;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
    public shape: string = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The sides of the triangle must be positive numbers.');
    }

    if (a + c <= b || a + b <= c || b + c <= a) {
      throw new Error('it is impossible to create such a triangle');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return roundDown(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)));
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public shape: string = 'circle',
  ) {
    if (a <= 0) {
      throw new Error(`this radius value ${this.a} is not valid`);
    }
  }

  getArea(): number {
    return roundDown(Math.PI * Math.pow(this.a, 2));
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
    public shape: string = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`the height or width of the rectangle cannot be <= 0`);
    }
  }

  getArea(): number {
    return roundDown(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
