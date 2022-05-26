type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: 'triangle';

  public color: Color;

  public a: number;

  public b: number;

  public c: number;

  constructor(color: Color, a: number, b: number, c: number) {
    this.shape = 'triangle';

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The length of the sides must be greater than 0');
    }

    const maxSideLength = Math.max(a, b, c);

    if (maxSideLength >= (a + b + c - maxSideLength)) {
      throw new Error('sides a, b and c can\'t form a triangle');
    }
  }

  getArea(): number {
    const semiPer = (this.a + this.b + this.c) / 2;

    return Math
      .trunc(Math
        /* eslint-disable-next-line */
        .sqrt(semiPer * ((semiPer - this.a) * (semiPer - this.b) * (semiPer - this.c))) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: 'circle';

  public color: Color;

  public radius: number;

  constructor(color: Color, radius: number) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.trunc(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle';

  public color: Color;

  public width: number;

  public height: number;

  constructor(color: Color, width: number, height: number) {
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('Length and width must be greater than 0');
    }
  }

  getArea(): number {
    return Math.trunc(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
