type FigureShape = 'triangle' | 'circle' | 'rectangle';
type FigureColor = 'red' | 'green' | 'blue';

export interface Figure {
  shape: FigureShape;
  color: FigureColor;
  getArea(): number;
}

export class Triangle implements Figure {
  a: number;

  b: number;

  c: number;

  shape: FigureShape;

  color: FigureColor;

  constructor(color: FigureColor, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than 0');
    }

    const maxSide = Math.max(a, b, c);
    const sumOfOtherSides = a + b + c - maxSide;

    if (maxSide >= sumOfOtherSides) {
      throw new Error(
        'Sides ' + a + ', ' + b + ', ' + c + " can't form a triangle",
      );
    }

    this.a = a;
    this.b = b;
    this.c = c;
    this.shape = 'triangle';
    this.color = color;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  r: number;

  shape: FigureShape;

  color: FigureColor;

  constructor(color: FigureColor, r: number) {
    if (r <= 0) {
      throw new Error('Radius must be greater than 0');
    }

    this.r = r;
    this.shape = 'circle';
    this.color = color;
  }

  getArea(): number {
    return Math.floor(Math.PI * Math.pow(this.r, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  width: number;

  height: number;

  shape: FigureShape;

  color: FigureColor;

  constructor(color: FigureColor, width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }

    this.width = width;
    this.height = height;
    this.shape = 'rectangle';
    this.color = color;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
