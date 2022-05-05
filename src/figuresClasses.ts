export enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export enum Colors {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shapes;
  color: Colors;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes = Shapes.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      a <= 0
      || b <= 0
      || c <= 0
      || a + b <= c
      || a + c <= b
      || b + c <= a
    ) {
      throw new Error('Ii\'s can\'t be triangle with this parameters');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const sqrt: number
    = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(sqrt * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shapes = Shapes.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius is not correct');
    }
  }

  getArea(): number {
    const sqrt: number
      = Math.floor(Math.PI * this.radius * this.radius * 100) / 100;

    return sqrt;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = Shapes.Rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Parameters are not correct');
    }
  }

  getArea(): number {
    const sqrt: number = Math.floor(this.width * this.height * 100) / 100;

    return sqrt;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
