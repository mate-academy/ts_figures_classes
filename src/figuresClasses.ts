
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a = 0,
    public b = 0,
    public c = 0,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides of a triangle must be greater than 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('must be less than the sum of the other two sides');
    }
}

getArea(): number {
  const s = (this.a + this.b + this.c) / 2;

  const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

  return Math.floor(area * 100) / 100;
}
}

export class Circle implements Figure {
  public shape: Shape = 'circle';
  constructor(
    public color: Color,
    public radius: number = 0,
  ) {
    if (radius <= 0) {
      throw new Error(`it can't be a circle`);
    }
  }
  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number = 0,
    public height: number = 0,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`it can't be a rectangle`);
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
