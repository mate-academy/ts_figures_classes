type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side\'s length should be greater 0');
    }

    const sidesLength = [a, b, c].sort((x, y) => x - y);

    if (sidesLength[2] >= sidesLength[0] + sidesLength[1]) {
      throw new Error(
        'The longest side should be less than a sum of two others',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.trunc(Math.sqrt(s
      * (s - this.a) * (s - this.b) * (s - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Radius should be greater 0');
    }
  }

  getArea(): number {
    return Math.trunc((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('Side\'s length should be greater 0');
    }
  }

  getArea(): number {
    return Math.trunc(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
