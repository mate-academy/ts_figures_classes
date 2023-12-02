type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Color
  shape: Shape
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
    const checkLessZero = (a * b * c) <= 0;
    const longSide = Math.max(a, b, c);
    const checkSide = (a + b + c - longSide) <= longSide;

    if (checkLessZero || checkSide) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (a + b + c) * (1 / 2);
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('error');
    }
  }

  getArea(): number {
    const { radius } = this;
    const area = Math.PI * (radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape : Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    const isWrongSide = width <= 0 || height <= 0;

    if (isWrongSide) {
      throw new Error('eroor');
    }
  }

  getArea(): number {
    const { height, width } = this;
    const area = height * width;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
