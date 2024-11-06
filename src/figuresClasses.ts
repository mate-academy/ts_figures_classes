type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

function roundTo2FloatingPoints(num: number): number {
  return Math.floor(num * 100) / 100;
}

function validateTriangle(a: number, b: number, c: number): void {
  if (!a || !b || !c || a <= 0 || b <= 0 || c <= 0) {
    throw new Error('Triangle side should be greater than 0');
  }

  const sorted: number[] = [a, b, c].sort((side1, side2) => side2 - side1);

  if (sorted[0] >= sorted[1] + sorted[2]) {
    throw new Error(
      // eslint-disable-next-line max-len
      'Triangle longest side should not be equal or greater the sum of the remaining sides',
    );
  }
}

export class Triangle implements Figure {
  public readonly shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    validateTriangle(a, b, c);
    this.shape = 'triangle';
  }

  getArea: () => number = () => {
    const s: number = (this.a + this.b + this.c) / 2;
    const diffA: number = s - this.a;
    const diffB: number = s - this.b;
    const diffC: number = s - this.c;

    const area = Math.sqrt(s * diffA * diffB * diffC);

    return roundTo2FloatingPoints(area);
  };
}

function validateCircle(radius: number): void {
  if (!radius || radius <= 0) {
    throw new Error('Circle radius should be greater than 0');
  }
}

export class Circle implements Figure {
  public readonly shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    validateCircle(radius);
    this.shape = 'circle';
  }

  getArea: () => number = () => {
    const area = Math.PI * Math.pow(this.radius, 2);

    return roundTo2FloatingPoints(area);
  };
}

function validateRectangle(a: number, b: number): void {
  if (!a || !b || a <= 0 || b <= 0) {
    throw new Error('Rectangle side should be greater than 0');
  }
}

export class Rectangle implements Figure {
  public readonly shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    validateRectangle(width, height);
    this.shape = 'rectangle';
  }

  getArea: () => number = () => {
    const area = this.width * this.height;

    return roundTo2FloatingPoints(area);
  };
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
