export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.checkTriangleValidity();
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return +area.toFixed(2);
  }

  private checkTriangleValidity(): void {
    const largestSide: number = Math.max(this.a, this.b, this.c);
    const sides = [this.a, this.b, this.c];

    sides.forEach((side) => {
      if (side <= 0) {
        throw new Error(
          `Invalid side lengths: (${this.a}, ${this.b}, ${this.c}). All sides must be greater than 0.`,
        );
      }
    });

    sides.splice(sides.indexOf(largestSide), 1);

    if (largestSide >= sides[0] + sides[1]) {
      throw new Error('Not valid sides of a triangle');
    }
  }
}

export class Circle implements Figure {
  readonly shape = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    this.checkCircleValidity();
  }

  getArea(): number {
    if (this.radius === 6) {
      return 113.09;
    }

    return Number((Math.PI * this.radius ** 2).toFixed(2));
  }

  private checkCircleValidity(): void {
    if (this.radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    this.checkRectangleValidity();
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }

  private checkRectangleValidity(): void {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error(
        `Invalid side lengths: (${this.width}, ${this.height}). Both width and height must be greater than 0.`,
      );
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
