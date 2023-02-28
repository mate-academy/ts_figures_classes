type FigureShape = 'triangle' | 'circle' | 'rectangle';
type FigureColor = 'red' | 'green' | 'blue';

export interface Figure {
  shape: FigureShape;
  color: FigureColor;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: FigureShape;

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Length of sides must be greater than 0.');
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error('The longest side must be greater than others side.');
    }

    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return Number(Math.sqrt(p * (p - this.a)
      * (p - this.b) * (p - this.c)).toFixed(2));
  }
}

export class Circle implements Figure {
  shape: FigureShape;

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0.');
    }
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.trunc(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: FigureShape;

  constructor(
    public color: FigureColor,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Each side must be greater 0.');
    }
    this.shape = 'rectangle';
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
