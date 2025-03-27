export interface Figure {
  readonly shape: string;
  readonly color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  readonly color: string;

  constructor(
    color: string,
    readonly a: number,
    readonly b: number,
    readonly c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be greater than 0.');
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error(
        'The longest side must be less than the sum of the other two sides.',
      );
    }

    this.color = color;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  readonly color: string;

  constructor(
    color: string,
    readonly radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0.');
    }

    this.color = color;
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  readonly color: string;

  constructor(
    color: string,
    readonly width: number,
    readonly height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0.');
    }

    this.color = color;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
