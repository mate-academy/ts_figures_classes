/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-useless-constructor */
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('your error message');
    }

    const biggestSide = Math.max(this.a, this.b, this.c);

    if (
      this.a + this.b <= biggestSide ||
      this.a + this.c <= biggestSide ||
      this.b + this.c <= biggestSide
    ) {
      throw new Error('it is not a triangle');
    }
  }

  getArea(a = this.a, b = this.b, c = this.c) {
    const p = (a + b + c) / 2;
    const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return Number(s.toFixed(2));
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const squareCircle = Math.PI * this.radius ** 2;
    const squareRounded = Math.floor(squareCircle * 100) / 100;

    return squareRounded;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(width = this.width, height = this.height) {
    const s = width * height;

    return Number(s.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  const figureShape: string = figure.shape;
  const figureColor: string = figure.color;
  const s: number = figure.getArea();

  return `A ${figureColor} ${figureShape} - ${s}`;
}
