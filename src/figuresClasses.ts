type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function roundDownToHundreds(number: number): number {
  return Math.floor(number * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('All sides of a triangle must be positive numbers.');
    }

    const sides = [this.a, this.b, this.c].sort(
      (n1: number, n2: number): number => n1 - n2,
    );

    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error(
        `sides ${this.a}, ${this.b} and ${this.c} can't form a triangle`,
      );
    }
  }

  getArea(): number {
    const s = (1 / 2) * (this.a + this.b + this.c);

    return roundDownToHundreds(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)),
    );
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('The radius of a circle must be a positive number');
    }
  }

  getArea(): number {
    return roundDownToHundreds(Math.PI * this.radius * this.radius);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error(
        'The width and height of a rectangle must be positive numbers.',
      );
    }
  }

  getArea(): number {
    return roundDownToHundreds(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
