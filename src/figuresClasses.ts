type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a >= b + c || b >= c + a || c >= a + b) {
      throw new Error('Sides a, b, c can`t make a triangle');
    }
  }

  getArea = (): number => {
    const a = this.a;
    const b = this.b;
    const c = this.c;

    const s = (a + b + c) / 2;

    const square = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(square * 100) / 100;
  };
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Enter valid radius');
    }
  }

  getArea = (): number => {
    const square = Math.PI * this.radius ** 2;

    return Math.floor(square * 100) / 100;
  };
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Enter valid sides a, b');
    }
  }

  getArea = (): number => {
    const square = this.a * this.b;

    return Math.floor(square * 100) / 100;
  };
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
