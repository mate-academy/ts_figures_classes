type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const a = this.a;
    const b = this.b;
    const c = this.c;

    const s = (a + b + c) / 2;

    const square = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public circle: number,
  ) {
    if (circle <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const circle = this.circle;
    const square = Math.PI * (circle * circle);

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const width = this.width;
    const height = this.height;

    return width * height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
