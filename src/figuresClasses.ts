type Color = 'red' | 'blue' | 'green';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Color,
  shape: Shape,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
      throw new Error('This triangle does not exist');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.trunc(Math.sqrt(p * (p - this.a) * (p - this.b)
    * (p - this.c)) * 100) / 100;
  }
}

export class Circle {
  public shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('This circle does not exist');
    }
  }

  getArea(): number {
    return Math.trunc(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle {
  public shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('This rectangle does not exist');
    }
  }

  getArea(): number {
    return Math.trunc(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
