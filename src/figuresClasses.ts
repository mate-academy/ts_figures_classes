export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a = 0,
    public b = 0,
    public c = 0,
    readonly shape = 'triangle',
  ) {
    const sides = [this.a, this.b, this.c].sort(
      (sideA, sideB) => (sideA - sideB) * -1,
    );

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('All side lengths must be positive numbers.');
    }

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error('The provided sides do not form a valid triangle.');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius = 0,
    readonly shape = 'circle',
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must be a positive number.');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width = 0,
    public height = 0,
    readonly shape = 'rectangle',
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width and height must be positive numbers.');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
