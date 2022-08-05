export function roundToHundredth(value: number): number {
  return Math.floor(value * 100) / 100;
}

export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        'Wrong parameters! Figure\'s side cannot be less or equal to 0',
      );
    }

    if ((a >= b + c) || (b >= a + c) || (c >= b + a)) {
      throw new Error('Wrong parameters! It\'s not a triangle');
    }
  }

  getArea(): number {
    const semiPerimetr: number = (this.a + this.b + this.c) / 2;
    const squareTriangle: number = Math.sqrt(semiPerimetr
      * (semiPerimetr - this.a) * (semiPerimetr - this.b)
      * (semiPerimetr - this.c));

    return roundToHundredth(squareTriangle);
  }
}

export class Circle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('Wrong parameters! Radius cannot be less or equal to 0');
    }
  }

  getArea(): number {
    const squareCircle: number = Math.PI * this.radius * this.radius;

    return roundToHundredth(squareCircle);
  }
}

export class Rectangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error(
        'Wrong parameters! Figure\'s side cannot be less or equal to 0',
      );
    }

    if (width === height) {
      throw new Error(
        'Wrong parameters! It\'s not a rectangle',
      );
    }
  }

  getArea(): number {
    const squareRectangle: number = this.width * this.height;

    return roundToHundredth(squareRectangle);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
