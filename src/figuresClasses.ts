export interface Figure {
  color: string;
  shape: string;
}

interface TriangleShape {
  a: number;
  b: number;
  c: number;
}

interface CircleRaduis {
  r: number;
}

interface RectangleShape {
  a: number;
  b: number;
}

export class Triangle implements Figure, TriangleShape {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c];
    const subZero = sides.some((side) => side <= 0);
    const maxSide = Math.max(...sides);
    const sumOfSides = sides.reduce((acc, curr) => acc + curr, 0);

    if (maxSide >= (sumOfSides - maxSide)) {
      throw new Error('the longest side of a triangle is >= than a sum');
    }

    if (subZero) {
      throw new Error('One of your sides is less than 0');
    }
  }

  getArea():number {
    const p = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Number(square.toFixed(2));
  }
}

export class Circle implements Figure, CircleRaduis {
  shape = 'circle';

  constructor(
    public color: string,
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error('One of your sides is less than 0');
    }
  }

  getArea():number {
    return Math.floor((Math.PI * this.r ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure, RectangleShape {
  shape = 'rectangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
  ) {
    const sides = [a, b];
    const subZero = sides.some((side) => side <= 0);

    if (subZero) {
      throw new Error('One of your sides is less than 0');
    }
  }

  getArea(): number {
    return Number((this.a * this.b).toFixed(2));
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
