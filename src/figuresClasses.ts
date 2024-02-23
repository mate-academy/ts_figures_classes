type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number
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
      throw new Error('Sides must be greater than 0');
    }

    const p = a + b + c;
    const longest = Math.max(a, b, c);

    if (longest >= p - longest) {
      throw new Error(
        `sides ${this.a}, ${this.b}, ${this.c} can't form a triangle`,
      );
    }
  }

  getArea(): number {
    const p = this.a + this.b + this.c;
    const s = p / 2;

    return +(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)))
      .toFixed(2);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('Sides must be greater than 0');
    }
  }

  getArea(): number {
    return +(this.height * this.width).toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const { shape, color } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
