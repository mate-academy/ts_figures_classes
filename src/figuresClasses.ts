export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0) {
      throw new Error("Side 'a' must be greater than zero.");
    }

    if (b <= 0) {
      throw new Error("Side 'b' must be greater than zero.");
    }

    if (c <= 0) {
      throw new Error("Side 'c' must be greater than zero.");
    }

    const sides = [a, b, c].sort((x, y) => x - y);

    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error(
        `The longest side of a triangle must be less than the sum of the other two sides.`,
      );
    }
  }

  shape: string = 'triangle';

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero.');
    }
  }

  shape: string = 'circle';

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    private width: number,
    private height: number,
  ) {
    if (width <= 0) {
      throw new Error('Width must be greater than zero.');
    }

    if (height <= 0) {
      throw new Error('Height must be greater than zero.');
    }
  }

  shape: string = 'rectangle';

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
