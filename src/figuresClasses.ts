type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'Red' | 'Green' | 'Blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

function round(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('your error message');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('your error message');
    }
  }

  public shape: Shape = 'triangle';

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return round(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)));
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return round(area);
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  public shape: Shape = 'rectangle';

  getArea(): number {
    return round(this.width * this.height);
  }
}

export function getInfo(figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
