type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

function roundDown(num: number): number {
  return Math.floor(num * 100) / 100;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const longSide
      = ((a + b + c) - Math.max(a, b, c))
        - Math.max(a, b, c);

    if (a <= 0 || b <= 0 || c <= 0 || longSide <= 0) {
      throw new Error('Triangle with given sides does not exist.');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const p = (a + b + c) / 2;

    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return roundDown(area);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number.');
    }
  }

  getArea(): number {
    const { radius } = this;
    const area = Math.PI * radius * radius;

    return roundDown(area);
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
      throw new Error('Width and height must be positive numbers.');
    }
  }

  getArea(): number {
    const { width, height } = this;

    return roundDown(width * height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
