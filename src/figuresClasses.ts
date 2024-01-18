type Shape = 'triangle'| 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
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
      throw new Error('Numbers should be positive');
    }

    if (a >= b + c || b >= c + a || c >= b + a) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (a + b + c) / 2;

    return Math.floor(
      Math.sqrt(p * (p - a) * (p - b) * (p - c)) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radious: number,
  ) {
    if (radious <= 0) {
      throw new Error('Radious must be > 0');
    }
    this.radious = radious;
    this.color = color;
  }

  getArea(): number {
    return Math.floor(this.radious ** 2 * Math.PI * 100) / 100;
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
      throw new Error('Width or Height must be > 0');
    }
    this.width = width;
    this.height = height;
    this.color = color;
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
