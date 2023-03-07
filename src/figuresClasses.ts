export interface Figure {
  color: string,
  a: number,
  shape: string,
  getArea: object,
  b?: number,
  c?: number,
}

type Color = 'red' | 'green' | 'blue';

function isValid(...args: number[]): void {
  args.forEach((arg) => {
    if (arg <= 0) {
      throw new Error('Invalid input: some argument <= 0');
    }
  });
}

export class Triangle implements Figure {
  shape: string;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    isValid(a, b, c);

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Invalid input: hypotenuse >= legs sum');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const area: number = 0.25 * Math.sqrt(((a * a + b * b + c * c) ** 2)
      - (2 * (a ** 4 + b ** 4 + c ** 4)));

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: string;

  constructor(
    public color: Color,
    public a: number,
  ) {
    this.shape = 'circle';

    isValid(a);
  }

  getArea(): number {
    const { a } = this;
    const area: number = a ** 2 * Math.PI;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    this.shape = 'rectangle';

    isValid(a, b);
  }

  getArea(): number {
    const { a, b } = this;

    return a * b;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape }: Figure = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
