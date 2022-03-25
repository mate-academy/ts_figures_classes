export enum FigureType {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

export interface Figure {
  shape: FigureType;
  color: string;

  getArea(): number;
}

export class Triangle implements Figure {
  a: number;

  b: number;

  c: number;

  color: string;

  shape = FigureType.triangle;

  constructor(color: string, a :number, b: number, c: number) {
    this.color = color;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Incorrect dimension value. Has to be positive');
    }

    if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
      throw new Error('Incorrect triangle dimensions. Sum of two sides'
        + ' in triangle has to be less than third side');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Number(Math.sqrt(s * ((s - this.a) * (s - this.b)
  * (s - this.c))).toFixed(2));
  }
}

export class Circle implements Figure {
  radius: number;

  color: string;

  shape = FigureType.circle;

  constructor(color: string, radius :number) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('Incorrect dimension value. Has to be positive');
    }
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  width: number;

  height: number;

  color: string;

  shape = FigureType.rectangle;

  constructor(color: string, width :number, height :number) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('Incorrect dimension value. Has to be positive');
    }

    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Number((this.height * this.width).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape.toString()} - ${figure.getArea()}`;
}
