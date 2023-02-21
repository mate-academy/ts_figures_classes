type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
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
      throw new Error('The side length cannot be zero or less');
    }

    if ((a >= b + c) || (b >= c + a) || (c >= a + b)) {
      throw new Error('The sides can not form a triangle');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area = Math.round(Math.sqrt(p * (p - this.a)
    * (p - this.b) * (p - this.c)) * 100) / 100;

    return (area);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius length is less or equal to zero');
    }
  }

  getArea(): number {
    const area = Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;

    return (area);
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
      throw new Error('The side length cannot be zero or less');
    }
  }

  getArea(): number {
    const area = Math.round(((this.width * this.height) * 100) / 100);

    return (area);
  }
}

export function getInfo(figure: Figure): string {
  return (`A ${figure.color} ${figure.shape} - ${figure.getArea()}`);
}
