export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';

  getArea(): number;
}

export class Triangle implements Figure {
  public readonly shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error(
        'The sides of the triangle must be positive numbers greater than 0',
      );
    }

    const sides: number[] = [this.a, this.b, this.c].sort(
      (side1: number, side2: number) => side2 - side1,
    );

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error(
        `The longest side can't be greater than sum of other sides`,
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        100 * Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)),
      ) / 100
    );
  }
}

export class Circle implements Figure {
  public readonly shape = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`The radius must be positive numbers greater than 0`);
    }
  }

  getArea(): number {
    return Math.floor(100 * Math.PI * this.radius ** 2) / 100;
  }
}

export class Rectangle implements Figure {
  public readonly shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error(
        'The rectangle sides must be positive numbers greater than 0',
      );
    }
  }

  getArea(): number {
    return Math.floor(100 * this.width * this.height) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
