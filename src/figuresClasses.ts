type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    protected a: number,
    protected b: number,
    protected c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Incorrect arguments');
    }

    if ((a >= b + c) || (b >= a + c) || (c >= a + b)) {
      throw new Error('Triangle should have proper sides');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const tl = (a + b + c) / 2;
    const area = Math.sqrt(tl * (tl - a) * (tl - b) * (tl - c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    protected radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Not correct arguments');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    protected width: number,
    protected height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Incorrect arguments');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${String(figure.getArea())}`;
}
