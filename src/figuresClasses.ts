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
    private a: number,
    private b: number,
    private c: number,
  ) {
    if ((a >= b + c) || (b >= c + a) || (c >= a + b)) {
      throw new Error('The any side length cannot be less than sum of both');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side length cannot be zero or less');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return (Math.round(Math.sqrt(p * (p - this.a)
    * (p - this.b) * (p - this.c)) * 100) / 100);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius length is less or equal to zero');
    }
  }

  getArea(): number {
    return (Math.floor(Math.PI * (this.radius ** 2) * 100) / 100);
  }
}

export class Rectangle {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('The any side length cannot be zero or less');
    }
  }

  getArea(): number {
    return (Math.round(this.width * this.height * 100) / 100);
  }
}

export function getInfo(figure: Figure): string {
  return (`A ${figure.color} ${figure.shape} - ${figure.getArea()}`);
}
