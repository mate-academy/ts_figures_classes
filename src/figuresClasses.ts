export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'blue' | 'green';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle';

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }

  constructor(
    public color: 'red' | 'blue' | 'green',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be greater than 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(
        'The longest side must be less than the sum of the other two sides',
      );
    }

    this.shape = 'triangle';
  }
}

export class Circle implements Figure {
  shape: 'circle';

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }

  constructor(
    public color: 'red' | 'blue' | 'green',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }

    this.shape = 'circle';
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  getArea(): number {
    const area = this.height * this.width;

    return Math.floor(area * 100) / 100;
  }

  constructor(
    public color: 'red' | 'blue' | 'green',
    public height: number,
    public width: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('Width and height must be greater than 0');
    }

    this.shape = 'rectangle';
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
