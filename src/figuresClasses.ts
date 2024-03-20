type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    protected a: number,
    protected b: number,
    protected c: number,
    public shape: Shape = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All triangle sides must be > 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Invalid triangle sides');
    }
  }

  public getArea(): number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    protected radius: number,
    public shape: Shape = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius must be > 0');
    }
  }

  public getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    protected width: number,
    protected height: number,
    public shape: Shape = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and Height must be > 0');
    }
  }

  public getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
