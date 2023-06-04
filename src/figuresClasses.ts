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
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (Math.min(a, b, c) <= 0) {
      throw new Error('One of the sides of triangle are less than 0');
    }

    if (Math.max(a, b, c) >= a + b
      || Math.max(a, b, c) >= a + c
      || Math.max(a, b, c) >= c + b) {
      throw new Error('One of the sides is >= than a sum of two others');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (a + b + c) / 2;
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`${radius} is less than 0`);
    }
  }

  getArea(): number {
    const { radius } = this;
    const area = Math.PI * radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(`${width} or ${height} is less than 0`);
    }
  }

  getArea(): number {
    const { height, width } = this;
    const area = height * width;

    return +area.toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
