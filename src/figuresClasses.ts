type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const numbers: number[] = [a, b, c];
    const negative = numbers.some((i) => i <= 0);
    const sides = numbers.sort((x, y) => y - x);
    const invalid = sides[0] >= sides[1] + sides[2];

    if (negative || invalid) {
      throw new Error(`It isn't a ${this.shape}`);
    }
  }

  getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);
    const calc = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(calc * 100) / 100;
  }
}

export class Circle {
  shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`It isn't a ${this.shape}`);
    }
  }

  getArea(): number {
    const calculated = (Math.PI * this.radius ** 2);

    return Math.floor(calculated * 100) / 100;
  }
}

export class Rectangle {
  shape: Shapes = 'rectangle';

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
    const calculated = this.width * this.height;

    return Math.floor(calculated * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
