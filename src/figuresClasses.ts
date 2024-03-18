export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('your value should be bigger than 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('your value should not be bigger than sum of other two');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const s: number = (a + b + c) / 2;
    const forTriangle: string = Math.sqrt(
      s * (s - a) * (s - b) * (s - c),
    ).toFixed(2);

    return +forTriangle;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('your value should be bigger than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: Color,
    private height: number,
    private width: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('your value should be bigger than 0');
    }
  }

  getArea(): number {
    const forRectangle: string = (this.height * this.width).toFixed(2);

    return parseInt(forRectangle);
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
