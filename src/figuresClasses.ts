function roundTo100(digits: number): number {
  return Math.floor(digits * 100) / 100;
}

type Shape = 'triangle'| 'circle'| 'rectangle';
type Color = 'red'| 'green'| 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  public color;

  public a;

  public b;

  public c;

  constructor(color: Color, a: number, b: number, c: number) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('what are you doing, dude?');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('what are you doing, dude?');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return roundTo100((Math.sqrt(p * (p - this.a)
        * (p - this.b) * (p - this.c))));
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  public color;

  public radius;

  constructor(color: Color, radius: number) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('what are you doing, dude?');
    }
  }

  getArea(): number {
    return roundTo100(Math.PI * this.radius * this.radius);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  public width;

  public color;

  public height;

  constructor(color: Color, width: number, height: number) {
    this.width = width;
    this.height = height;
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('what are you doing, dude?');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
