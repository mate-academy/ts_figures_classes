import {
  INVALID_SIDE_LENGTH_ERROR,
  GEOMETRIC_INCONSISTENCY_ERROR,
  INCORRECT_RADIUS,
  INVALID_RECTANGLE_SIDE_LENGTH,
} from './utils/errorMessage';

type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

function getTwoDecimalPlaces(area: number): number {
  return Math.floor(area * 100) / 100;
}

export interface Figure {
  shape: Shapes,
  color: Colors,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const isSideLengthCorrect = a <= 0 || b <= 0 || c <= 0;
    const isSumOfSideLengthGreater = a >= b + c || b >= a + c || c >= a + b;

    if (isSideLengthCorrect) {
      throw new Error(INVALID_SIDE_LENGTH_ERROR);
    }

    if (isSumOfSideLengthGreater) {
      throw new Error(GEOMETRIC_INCONSISTENCY_ERROR);
    }
  }

  getArea(): number {
    const halfPerimeter: number = (this.a + this.b + this.c) / 2;
    const triangleArea: number
      = Math.sqrt(halfPerimeter * (halfPerimeter - this.a)
        * (halfPerimeter - this.b) * (halfPerimeter - this.c));

    return getTwoDecimalPlaces(triangleArea);
  }
}

export class Circle implements Figure {
  public shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error(INCORRECT_RADIUS);
    }
  }

  getArea(): number {
    const circleArea: number = Math.PI * (this.radius ** 2);

    return getTwoDecimalPlaces(circleArea);
  }
}

export class Rectangle implements Figure {
  public shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error(INVALID_RECTANGLE_SIDE_LENGTH);
    }
  }

  getArea(): number {
    const rectangleArea = this.width * this.height;

    return getTwoDecimalPlaces(rectangleArea);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
