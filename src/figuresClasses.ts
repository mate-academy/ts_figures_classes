type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

function RoundDown(num: number): number {
  return Math.floor(num * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.shape = 'triangle';

    if (this.a < 0 || this.b < 0 || this.c < 0) {
      throw new Error('The length is less than zero');
    }

    if (
      this.a >= this.b + this.c ||
      this.b >= this.a + this.c ||
      this.c >= this.a + this.b
    ) {
      throw new Error("sides 1, 2 and 3 can't form a triangle");
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const A = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return RoundDown(A);
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('The length is less than zero');
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return RoundDown(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.color = color;
    this.width = width;
    this.height = height;
    this.shape = 'rectangle';

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('The length is less than zero');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return RoundDown(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
