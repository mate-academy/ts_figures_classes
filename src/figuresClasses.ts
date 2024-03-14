export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid values: must be greater than 0');
    }

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error('Invalid triangle sides');
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const sum: number = this.a + this.b + this.c;

    return +(
      ((sum / 2) *
        (sum / 2 - this.a) *
        (sum / 2 - this.b) *
        (sum / 2 - this.c)) **
      0.5
    ).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid values: must be greater than 0');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    return Math.floor(this.radius ** 2 * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  constructor(
    public color: string,
    public width: number,
    public heigth: number,
  ) {
    if (width <= 0 || heigth <= 0) {
      throw new Error('Invalid values: must be greater than 0');
    }

    this.shape = 'rectangle';
  }

  getArea(): number {
    return this.width * this.heigth;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
