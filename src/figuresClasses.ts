export interface Figure {
  color: 'red' | 'green' | 'blue';
  shape: 'triangle' | 'rectangle' | 'circle';
  getArea(): number;
  a?: number;
  b?: number;
  c?: number;
  radius?: number;
  width?: number;
  height?: number;
}

function getRound(num: number): number {
  return Math.trunc(num * 100) / 100;
}

export class Triangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
    public shape: 'triangle',
  ) {
    const isAnySidesZero
      = this.a <= 0
      || this.b <= 0
      || this.c <= 0;

    const longestSide = Math.max(this.a, this.b, this.c);
    const isCanFormTriangle = [this.a, this.b, this.c]
      .filter((x) => x !== longestSide)
      .reduce((sum, x) => sum + x, 0) <= longestSide;

    if (isAnySidesZero) {
      throw new Error('set correct sides');
    }

    if (isCanFormTriangle) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return getRound(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)));
  }
}

export class Circle {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
    public shape: 'circle',
  ) {
    const isAnySidesZero = radius <= 0;

    if (isAnySidesZero) {
      throw new Error('set correct sides');
    }
  }

  getArea(): number {
    return getRound(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
    public shape: 'rectangle',
  ) {
    const isAnySidesZero = this.width <= 0 || this.height <= 0;

    if (isAnySidesZero) {
      throw new Error('set correct sides');
    }
  }

  getArea(): number {
    return getRound(this.height * this.width);
  }
}

export function getInfo(figure: Figure): string {
  if (figure.radius) {
    return `A ${figure.color} circle - ${figure.getArea()}`;
  }

  if (figure.height && figure.width) {
    return `A ${figure.color} rectangle - ${figure.getArea()}`;
  }

  if (figure.a && figure.b && figure.c) {
    return `A ${figure.color} triangle - ${figure.getArea()}`;
  }

  return '';
}
