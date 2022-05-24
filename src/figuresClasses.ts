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

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
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

  constructor(
    public color: Color,
    public radius: number,
  ) {
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

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
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
