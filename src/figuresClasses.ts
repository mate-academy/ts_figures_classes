import { normalize } from './normalize';

type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public color: Color;

  public a: number;

  public b: number;

  public c: number;

  constructor(
    color: Color,
    a: number,
    b: number,
    c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(`Wrong sides - a: ${a}, b: ${b}, c: ${c}!!!`);
    }

    if ((a + b) <= c || (b + c) <= a || (c + a) <= b) {
      throw new Error('Incorrect proportion of the sides of a triangle!');
    }
  }

  shape: Shape = 'triangle';

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return normalize(S);
  }
}

export class Circle implements Figure {
  public color: Color;

  public radius: number;

  constructor(color: Color, radius: number) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error(`Wrong unit - radius: ${radius}!!!`);
    }
  }

  shape: Shape = 'circle';

  getArea(): number {
    const S = Math.PI * (this.radius * this.radius);

    return normalize(S);
  }
}

export class Rectangle implements Figure {
  public color: Color;

  public width: number;

  public height: number;

  constructor(color: Color, width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error(`Wrong size - width: ${width}, height: ${height}!!!`);
    }
  }

  shape: Shape = 'rectangle';

  getArea(): number {
    const S = this.height * this.width;

    return normalize(S);
  }
}

export function getInfo(figure: Figure): string {
  const area: number = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
