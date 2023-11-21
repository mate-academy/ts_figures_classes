type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function roundToTwoDecimalPlaces(value: number): number {
  return Math.floor(value * 100) / 100;
}

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
    if (a <= 0
      || b <= 0
      || c <= 0
      || a + b + c - Math.max(a, b, c) <= Math.max(a, b, c)
    ) {
      throw new Error('Wrong dimensions');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiPerimeter = (a + b + c) / 2;
    const area = Math.sqrt(semiPerimeter
      * (semiPerimeter - a)
      * (semiPerimeter - b)
      * (semiPerimeter - c));

    return roundToTwoDecimalPlaces(area);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return roundToTwoDecimalPlaces(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private height: number,
    private width: number,
  ) {
    if (Math.min(height, width) <= 0) {
      throw new Error('Invalid rectangle');
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    return roundToTwoDecimalPlaces(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
