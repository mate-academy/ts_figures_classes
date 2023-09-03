enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

const ERRORS = {
  INVALID_SIDE: 'All sides should be have only positive numbers',
  INVALID_RADIUS: 'Radius should be have only positive numbers',
  NOT_TRIANGLE: 'It isn`t a triangle',
};

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

function roundDownToHundredths(number: number): number {
  return Math.floor(number * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const isNegativeSideNumber = a <= 0 || b <= 0 || c <= 0;
    const isNotTriangle = a + b <= c || a + c <= b || b + c <= a;

    if (isNegativeSideNumber) {
      throw new Error(ERRORS.INVALID_SIDE);
    }

    if (isNotTriangle) {
      throw new Error(ERRORS.NOT_TRIANGLE);
    }
  }

  getArea(): number {
    const halfPerimetr = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(halfPerimetr
      * (halfPerimetr - this.a)
      * (halfPerimetr - this.b)
      * (halfPerimetr - this.c));

    return roundDownToHundredths(area);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(ERRORS.INVALID_RADIUS);
    }
  }

  getArea(): number {
    const area = (Math.PI * this.radius ** 2);

    return roundDownToHundredths(area);
  }
}

export class Rectangle {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(ERRORS.INVALID_SIDE);
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundDownToHundredths(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
