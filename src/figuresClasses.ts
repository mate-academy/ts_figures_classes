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
      throw new Error('The sides can not be zero or less then zero');
    }

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error('Triangle with this sides doesn`t exist');
    }
  }

  getArea(): number {
    const { a, b, c } = {
      a: this.a,
      b: this.b,
      c: this.c,
    };

    const s: number = (a + b + c) / 2;
    const square: number = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius can not be zero or less then zero');
    }
  }

  getArea(): number {
    const square = Math.PI * this.radius ** 2;

    return Math.floor(square * 100) / 100;
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
      throw new Error('The sides can not be zero or less then zero');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
