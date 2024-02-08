const TRIANGLE = 'triangle';
const CIRCLE = 'circle';
const RECTANGLE = 'rectangle';

type Colors = 'red' | 'green' | 'blue';
type Shapes = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes = TRIANGLE;

  constructor(
    public color: Colors,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The side cannot be equal to 0');
    }

    const longest = Math.max(a, b, c);
    const sumTwoSide = a + b + c - longest;

    if (longest >= sumTwoSide) {
      throw new Error(`Side ${a} ${b} ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) * 0.5;

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shapes = CIRCLE;

  constructor(
    public color: Colors,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius cannot <= 0');
    }
  }

  getArea(): number {
    const area = (Math.PI * this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = RECTANGLE;

  constructor(
    public color: Colors,
    private whidth: number,
    private height: number,
  ) {
    if (whidth <= 0 || height <= 0) {
      throw new Error('Length or height must be greater than 0');
    }
  }

  getArea(): number {
    const area = this.whidth * this.height;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
