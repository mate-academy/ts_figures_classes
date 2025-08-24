export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'green' | 'red' | 'blue';
  getArea(): number;
}

function toFloor(number: number): number {
  return Math.floor(100 * number) / 100;
}

export class Triangle implements Figure {
  public shape: 'triangle' = 'triangle';

  constructor(
    public color: 'green' | 'red' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Sides must be positive numbers');
    } else {
      const sides = [this.a, this.b, this.c].sort((x, y) => x - y);

      if (sides[0] + sides[1] <= sides[2]) {
        throw new Error(
          'Biggest side must be less than the sum of the other two sides',
        );
      }
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return toFloor(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)));
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  constructor(
    public color: 'green' | 'red' | 'blue',
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must be a positive number');
    }
  }

  getArea(): number {
    return toFloor(Math.PI * this.radius * this.radius);
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'green' | 'red' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Sides must be positive numbers');
    }
  }

  getArea(): number {
    return toFloor(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
