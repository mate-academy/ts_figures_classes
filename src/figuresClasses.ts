export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All triangle sides must be positive numbers');
    }

    const sides = [a, b, c].sort((x, y) => y - x);

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error('The provided sides do not form a valid triangle');
    }
  }

  shape = 'triangle';

  getArea(): number {
    const parameter = (this.a + this.b + this.c) / 2;

    const triangleArea = Math.sqrt(
      parameter *
        (parameter - this.a) *
        (parameter - this.b) *
        (parameter - this.c),
    );

    return Math.floor(triangleArea * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius must be a positive number');
    }
  }

  shape = 'circle';

  getArea(): number {
    const areaCircle = Math.PI * this.radius ** 2;

    return Math.floor(areaCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle width and height must be positive numbers');
    }
  }

  shape = 'rectangle';

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
