type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function roundDown(num: number):number {
  return Math.floor(num * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('All side lengths must be greater than 0.');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('The longest side of the triangle must be'
      + 'shorter than the sum of the other two sides.');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return roundDown(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('The radius must be greater than 0.');
    }
  }

  getArea(): number {
    return roundDown(Math.PI * this.radius * this.radius);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('All side lengths must be greater than 0.');
    }
  }

  getArea(): number {
    return roundDown(this.a * this.b);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
