export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        'Sides must be positive numbers',
      );
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        'The sum of any two sides must be greater than the third one',
      );
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const square = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(
      square * (square - this.a) * (square - this.b) * (square - this.c),
    ).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(
        'Radius must be positive number',
      );
    }

    this.shape = 'circle';
  }

  getArea(): number {
    const square = Math.PI * (this.radius ** 2);

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        'Sides must be positive numbers',
      );
    }

    this.shape = 'rectangle';
  }

  getArea(): number {
    const square = this.width * this.height;

    return +square.toFixed(2);
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
