export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

const roundToHundredths = (num: number): number => {
  return Math.floor(num * 100) / 100;
};

export class Triangle implements Figure {
  readonly shape = 'triangle';

  constructor(
    public color: string,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        // eslint-disable-next-line max-len
        'The longest side of a triangle must be less than the sum of the others',
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return roundToHundredths(area);
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  constructor(
    public color: string,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return roundToHundredths(area);
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  constructor(
    public color: string,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Dimensions must be greater than 0');
    }
  }

  getArea(): number {
    return roundToHundredths(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
