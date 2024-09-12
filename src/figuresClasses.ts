export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

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
    const square: number = (a + b + c) / 2;
    const triangleArea: string = Math.sqrt(
      square * (square - a) * (square - b) * (square - c),
    ).toFixed(2);

    return +triangleArea;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

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
  shape: Shape = 'rectangle';

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
    const rectangleArea: string = (this.height * this.width).toFixed(2);

    return parseInt(rectangleArea);
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${area}`;
}
