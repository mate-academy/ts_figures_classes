type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function getRounded(item: number): number {
  return Math.floor(item * 100) / 100;
}

export class Triangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    protected a: number,
    protected b: number,
    protected c: number,
  ) {
    this.shape = 'triangle';

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('The value is less or equal to 0');
    }

    if ((a >= b + c) || (b >= a + c) || (c >= a + b)) {
      throw new Error('The longest side is >= than a sum of two others');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const triangleArea
     = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return getRounded(triangleArea);
  }
}

export class Circle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    protected radius: number,
  ) {
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error('The value is less or equal to 0');
    }
  }

  getArea(): number {
    const circleArea = Math.PI * (this.radius ** 2);

    return getRounded(circleArea);
  }
}

export class Rectangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    protected width: number,
    protected height: number,
  ) {
    this.shape = 'rectangle';

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('The value is less or equal to 0');
    }
  }

  getArea(): number {
    const rectangleArea = this.width * this.height;

    return Math.floor(rectangleArea * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
