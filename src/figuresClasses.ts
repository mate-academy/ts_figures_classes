type FigureShape = 'triangle' | 'circle' | 'rectangle';
type FigureColor = 'red' | 'green' | 'blue';

export interface Figure {
  shape: FigureShape;
  color: FigureColor;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: FigureShape = 'triangle';

  public sides: number[];

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.sides = [a, b, c];

    if (a <= 0 && b <= 0 && c <= 0) {
      throw new Error('All sides must be greater than 0');
    }

    const [max, ...rest] = this.sides.sort((x, y) => y - x);

    if (max >= rest.reduce((acc, curr) => acc + curr, 0)) {
      // eslint-disable-next-line max-len
      throw new Error('Invalid triangle: the longest side must be shorter than the sum of the other two sides');
    }
  }

  getArea(): number {
    const [a, b, c] = this.sides;
    const p = (a + b + c) / 2;
    const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return Number(s.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: FigureShape ='circle';

  constructor(
    public color: FigureColor,
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    const s: number = Math.PI * (this.r ** 2);

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: FigureShape ='rectangle';

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
