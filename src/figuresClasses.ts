type Color = 'red' | 'blue' | 'green';
type Shape = 'triangle' | 'circle' | 'rectangle';

function roundToTwoDecimals(num: number): number {
  return Math.trunc(num * 100) / 100;
}

export interface Figure {
  color: Color,
  shape: Shape,
  getArea: () => number,
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
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiPerimeter * (semiPerimeter - this.a)
    * (semiPerimeter - this.b) * (semiPerimeter - this.c));

    return roundToTwoDecimals(area);
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
    const area = Math.PI * this.radius * this.radius;

    return roundToTwoDecimals(area);
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
    const area = this.width * this.height;

    return roundToTwoDecimals(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
