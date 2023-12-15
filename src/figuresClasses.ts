
type Color = 'red' | 'green' | 'blue';
type Shape = 'circle' | 'triangle' | 'rectangle';

export interface Figure {
  color: Color,
  shape: Shape,
  getArea(): number,
}

const checkEachValueMustBiggerThanZero = (
  a: number,
  b = Infinity,
  c = Infinity,
): void => {
  if (Math.min(a, b, c) <= 0) {
    throw new Error('contains 0 or a negative number');
  }
};

const checkCorrectLengthsOfTriangleSides = (
  a: number,
  b: number,
  c: number,
): void => {
  checkEachValueMustBiggerThanZero(a, b, c);

  const max = Math.max(a, b, c);

  if (((a + b + c - max) - max) <= 0) {
    throw new Error('uncorrect lengths of the sides relation in a triangle');
  }
};

const round = (value: number): number => {
  return Math.trunc(value * 100) / 100;
};

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    checkCorrectLengthsOfTriangleSides(a, b, c);
    this.shape = 'triangle';
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const s: number = (p * (p - this.a) * (p - this.b) * (p - this.c));
    const square: number = Math.sqrt(s);

    return round(square);
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    checkEachValueMustBiggerThanZero(radius);
    this.shape = 'circle';
  }

  getArea(): number {
    return round((this.radius ** 2) * Math.PI);
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    checkEachValueMustBiggerThanZero(width, height);
    this.shape = 'rectangle';
  }

  getArea(): number {
    return round(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
