type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea: () => number;
}

function chechSide(side: number, sideName: string): void {
  if (side <= 0) {
    throw new Error(`${sideName} must be greater than 0.`);
  }
}

function isValidTriangle(a: number, b: number, c: number): void {
  const longestSide = Math.max(a, b, c);

  if (longestSide >= a + b + c - longestSide) {
    throw new Error('Enter valid sides for the triangle.');
  }
}

function floor(num: number, fractionDigits: number = 2): number {
  const multiplier: number = 10 ** fractionDigits;

  return Math.floor(num * multiplier) / multiplier;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,

    public a: number,
    public b: number,
    public c: number,
  ) {
    chechSide(a, 'a');
    chechSide(b, 'b');
    chechSide(c, 'c');

    isValidTriangle(a, b, c);
  }

  getArea(): number {
    const { a, b, c } = this;
    const p: number = (a + b + c) / 2;

    return floor(Math.sqrt(p * (p - a) * (p - b) * (p - c)));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    chechSide(radius, 'Radius');
  }

  getArea(): number {
    return floor(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,

    public a: number,
    public b: number,
  ) {
    chechSide(a, 'a');
    chechSide(b, 'b');
  }

  getArea(): number {
    return floor(this.a * this.b);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
