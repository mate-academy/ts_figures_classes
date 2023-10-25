type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

function getValueTwoNumbersAfterDot(value: number): number {
  return Math.floor(value * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side cannot be less than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Sum of two sides cannot be less than third side');
    }
  }

  getArea(): number {
    const perimeterHalf = (this.a + this.b + this.c) / 2;

    return getValueTwoNumbersAfterDot(Math
      .sqrt(perimeterHalf
        * (perimeterHalf - this.a)
        * (perimeterHalf - this.b)
        * (perimeterHalf - this.c)));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius');
    }
  }

  getArea(): number {
    return getValueTwoNumbersAfterDot(this.radius * this.radius * Math.PI);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid sides');
    }
  }

  getArea(): number {
    return Math.floor(this.height * this.width);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
