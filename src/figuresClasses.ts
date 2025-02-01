type Color = 'red' | 'blue' | 'green';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Color;
  shape?: Shape;
}

export class Triangle implements Figure {
  constructor(
    public color,
    public a: number,
    public b: number,
    public c: number,
    public shape,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    const max: number = Math.max(this.a, this.b, this.c);
    const sumOfTwoSmaller: number = this.a + this.b + this.c - max;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error(`sides 1, 2 and 3 can't form a triangle`);
    }

    if (max >= sumOfTwoSmaller) {
      throw new Error(`sides 1, 2 and 3 can't form a triangle`);
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(
      2,
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color,
    public radius: number,
    public shape,
  ) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }
  }

  getArea(): number {
    const result = Math.floor(Math.PI * this.radius * this.radius * 100) / 100;

    return result;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color,
    public width: number,
    public height: number,
    public shape,
  ) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (this.height <= 0 || this.width <= 0) {
      throw new Error('un error');
    }
  }

  getArea(): number {
    const result: number = +(this.height * this.width).toFixed(2);

    return result;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.constructor.name.toLowerCase()} - ${figure.getArea()}`;
}
