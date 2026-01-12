type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function roundDown(value: number): number {
  return Math.floor(value * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All triangle sides must be positive numbers');
    }

    const sides = [this.a, this.b, this.c].sort((x, y) => y - x);

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error(
        `The longest side must be less than the sum of the other two sides`,
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return roundDown(area);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius must be positive number');
    }
  }

  getArea(): number {
    return roundDown(Math.PI * this.radius * this.radius);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle width and height must be positive numbers');
    }
  }

  getArea(): number {
    return roundDown(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
