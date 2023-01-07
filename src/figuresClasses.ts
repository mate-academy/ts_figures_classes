
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  color: Colors;
  shape : string;
  getArea(): number;
}

type Shapes = 'triangle' | 'circle' | 'rectangle';

function checkForNegatives(...inputs: number[]): void {
  const FindnegativeNumber = [...inputs].find((num) => num <= 0);

  if (FindnegativeNumber) {
    throw new Error('not possible form a triangle');
  }
}

function checkForTriangle(a: number, b: number, c: number): void {
  if (a + b <= c || b + c <= a) {
    throw new Error('not possible form a triangle');
  }
}

const toFixed = (
  n: number,
  fixed: number,
)
: number => {
  const factor = 10 ** fixed;

  return Math.floor(n * factor) / factor;
};

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    checkForNegatives(this.a, this.b, this.c);
    checkForTriangle(this.a, this.b, this.c);
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,

  ) {
    checkForNegatives(this.radius);
  }

  getArea(): number {
    const square = Math.PI * this.radius * this.radius;

    return toFixed(square, 2);
  }
}

export class Rectangle implements Figure {
  shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
  ) {
    checkForNegatives(this.a, this.b);
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
