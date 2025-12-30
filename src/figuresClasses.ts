export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'Triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Sides cannot be negative or zero');
    }

    if (
      this.a + this.b <= this.c ||
      this.a + this.c <= this.b ||
      this.b + this.c <= this.a
    ) {
      throw new Error(
        'The provided sides cannot form a valid triangle because' +
          ' the sum of any two sides must be greater than the third.',
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return (
      Math.round(
        Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape = 'Circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius cannot be negative or zero');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'Rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Sides cannot be negative or zero');
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape.toLowerCase()} - ${figure.getArea()}`;
}
