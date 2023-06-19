type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

function validate(...args: number[]): void {
  const sides = [...args];

  if (sides.some((x) => x <= 0)) {
    throw new Error('Any length cannot be <= 0');
  }
}

function validateTrian(...args: number[]): void {
  const sides = [...args];
  const maxLength = Math.max(...sides);
  const indexMax = sides.findIndex((x) => x === maxLength);
  const sum = sides.reduce((a, b, i) => {
    if (i === indexMax) {
      return a;
    }

    return a + b;
  }, 0);

  if (maxLength >= sum) {
    throw new Error(
      'The longest side of a triangle is >= than a sum of two others',
    );
  }
}

function round(area: number): number {
  return Math.floor(area * 100) / 100;
}

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;
    this.shape = 'triangle';
    this.a = a;
    this.b = b;
    this.c = c;

    validate(this.a, this.b, this.c);
    validateTrian(this.a, this.b, this.c);
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return round(area);
  }
}

export class Circle {
  shape: Shapes;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;
    this.shape = 'circle';
    this.a = a;

    validate(this.a);
  }

  getArea(): number {
    const area = Math.PI * this.a ** 2;

    return round(area);
  }
}

export class Rectangle {
  shape: Shapes;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;
    this.shape = 'rectangle';
    this.a = a;
    this.b = b;

    validate(this.a, this.b);
  }

  getArea(): number {
    const area = this.a * this.b;

    return round(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
