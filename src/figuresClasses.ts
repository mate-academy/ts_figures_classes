export interface Figure {
  shape: string;
  color: string;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  private readonly sides: number[];

  constructor(public color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than 0');
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error(
        'Invalid triangle: the sum of two'
        + ' sides must be greater than the third side',
      );
    }
    this.sides = [a, b, c];
  }

  getArea(): number {
    const [a, b, c] = this.sides;
    const s = (a + b + c) / 2;

    return +(Math.sqrt(s * (s - a) * (s - b) * (s - c))).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  constructor(public color: string, public radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor((this.radius ** 2 * Math.PI) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
