type Lines = number;

type Color = 'red' | 'green' | 'blue';

type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: Lines,
    public b: Lines,
    public c: Lines,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('length of the line cant be 0 or less');
    }

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error('invalid lengths of triangle');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const result = (s * (s - this.a) * (s - this.b) * (s - this.c)) ** 0.5;

    return Number(result.toFixed(2));
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: Lines,
  ) {
    if (radius <= 0) {
      throw new Error('length cant be 0 or less');
    }
  }

  getArea(): number {
    return Math.floor(((this.radius ** 2) * Math.PI) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: Lines,
    public height: Lines,
  ) {
    if (width <= 0 || height <= 0) {
      throw Error('length cant be 0 or less');
    }
  }

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
