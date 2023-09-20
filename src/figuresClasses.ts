export interface Figure {
  shape: string,
  color: string,
  getArea(): number,
}

export class Triangle {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a + b + c <= Math.max(a, b, c) * 2 || Math.min(a, b, c) <= 0) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a ${this.shape}`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(s * (s - this.a)
      * (s - this.b) * (s - this.c)).toFixed(2);
  }
}

export class Circle {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`radius ${radius}, can't form a ${this.shape}`);
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle {
  shape = 'rectangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
  ) {
    if (Math.min(a, b) <= 0) {
      throw new Error(`sides ${a} and ${b} can't form a ${this.shape}`);
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${
    figure.shape} - ${figure.getArea()}`;
}
