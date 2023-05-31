type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

const error = new Error('somethig went wrong');

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!this.isValidTriangle()) {
      throw error;
    }
  }

  isValidTriangle(): boolean {
    const { a, b, c } = this;

    return a > 0
      && b > 0
      && c > 0
      && a < b + c
      && b < a + c
      && c < a + b;
  }

  getArea(): number {
    const { a, b, c } = this;

    const s: number = (a + b + c) / 2;
    const area: number = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (!this.isValidCircle()) {
      throw error;
    }
  }

  isValidCircle(): boolean {
    return this.radius > 0;
  }

  getArea(): number {
    const area = Math.PI * (this.radius * this.radius);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public w: number,
    public h: number,
  ) {
    if (!this.isValidRectagle()) {
      throw error;
    }
  }

  isValidRectagle(): boolean {
    const { w, h } = this;

    return w > 0 && h > 0;
  }

  getArea(): number {
    const { w, h } = this;
    const area = w * h;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
