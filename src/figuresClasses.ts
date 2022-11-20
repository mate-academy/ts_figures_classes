type Color = 'red'| 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

function NumberRound(number: number): number {
  return Math.floor(number * 100) / 100;
}

export class Triangle {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const maxSide = Math.max(a, b, c);
    const sumOfSmallSides = a + b + c - maxSide;

    if (sumOfSmallSides <= maxSide) {
      throw new Error('length of biggest side cannot '
      + 'be bigger than sum of two oher sides');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('side length cannot be zero or negative');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return NumberRound(s);
  }
}

export class Circle {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error('radius length cannot be zero or negative');
    }
  }

  getArea(): number {
    return NumberRound(Math.PI * this.r ** 2);
  }
}

export class Rectangle {
  shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('side length cannot be zero or negative');
    }
  }

  getArea(): number {
    return NumberRound(this.a * this.b);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
