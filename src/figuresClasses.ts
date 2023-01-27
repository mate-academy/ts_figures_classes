type Shape = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const numbers: number[] = [a, b, c];
    const negative = numbers.some((el) => el <= 0);
    const sides = numbers.sort((x, y) => y - x);
    const invalidSize = sides[0] >= sides[1] + sides[2];

    if (negative || invalidSize) {
      throw new Error(`It isn't a ${this.shape}`);
    }
  }

  getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);
    const result = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(result * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`It isn't a ${this.shape}`);
    }
  }

  getArea(): number {
    const result = (Math.PI * this.radius ** 2);

    return Math.floor(result * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`It isn't a ${this.shape}`);
    }
  }

  getArea(): number {
    const result = this.width * this.height;

    return Math.floor(result * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
