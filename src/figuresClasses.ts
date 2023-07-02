export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'green' | 'red' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle';

  constructor(
    public color: 'green' | 'red' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Every side of the triangle must be greater than 0');
    }

    const biggestSide = Math.max(this.a, this.b, this.c);

    if (biggestSide >= this.b + this.c + this.a - biggestSide) {
      throw new Error('Every side must be less than two other together');
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;

    const area
      = Math.floor(((semiperimeter * (semiperimeter - this.a)
      * (semiperimeter - this.b) * (semiperimeter - this.c))
      ** 0.5) * 100) / 100;

    return area;
  }
}

export class Circle implements Figure {
  shape: 'circle';

  constructor(
    public color: 'green' | 'red' | 'blue',
    public radius: number,
  ) {
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error('Radius of the circle must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  constructor(
    public color: 'green' | 'red' | 'blue',
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Every side of the rectangle must be greater than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
