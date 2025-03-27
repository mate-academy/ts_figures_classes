export interface Figure {
  readonly shape: string;
  readonly color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  constructor(
    readonly color: string,
    readonly a: number,
    readonly b: number,
    readonly c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be greater than 0.');
    }

    if (a + b <= c) {
      throw new Error(
        `Invalid triangle: the sum of sides a (${a}) and b (${b}) must be greater than side c (${c}).`,
      );
    }

    if (b + c <= a) {
      throw new Error(
        `Invalid triangle: the sum of sides b (${b}) and c (${c}) must be greater than side a (${a}).`,
      );
    }

    if (c + a <= b) {
      throw new Error(
        `Invalid triangle: the sum of sides c (${c}) and a (${a}) must be greater than side b (${b}).`,
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  constructor(
    readonly color: string,
    readonly radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0.');
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  constructor(
    readonly color: string,
    readonly width: number,
    readonly height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0.');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
