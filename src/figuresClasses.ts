export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  color: string;

  private a: number;

  private b: number;

  private c: number;

  constructor(color: string, a: number, b: number, c: number) {
    this.color = color;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side lengths must be greater than zero');
    }

    const sides = [a, b, c].sort((x, y) => y - x);

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error(
        'The longest side of a triangle cannot be greater' +
          'than or equal to the sum of the other two sides',
      );
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  color: string;

  private radius: number;

  constructor(color: string, radius: number) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }

    this.radius = radius;
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  color: string;

  private width: number;

  private height: number;

  constructor(color: string, width: number, height: number) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than zero');
    }

    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
