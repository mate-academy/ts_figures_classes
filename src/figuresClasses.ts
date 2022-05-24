enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

const roundNumber = (number: number): number => {
  return Math.floor(number * 100) / 100;
};

const areDimensionsValid = (...dimensions: number[]): void => {
  const containsZeroOrLess = dimensions.some(
    (num: number) => num <= 0,
  );

  if (containsZeroOrLess) {
    throw new Error('One of the dimensions is 0 or less');
  }
};

const isTriangleValid = (a: number, b: number, c: number): void => {
  const oneSideIsLongerThanSumOfOthers = a >= b + c
    || b >= a + c
    || c >= a + b;

  if (oneSideIsLongerThanSumOfOthers) {
    throw new Error(
      'One of the sides is longer than the sum of the others',
    );
  }
};

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    areDimensionsValid(a, b, c);
    isTriangleValid(a, b, c);
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return roundNumber(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)),
    );
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    areDimensionsValid(radius);
  }

  getArea(): number {
    return roundNumber(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    areDimensionsValid(width, height);
  }

  getArea(): number {
    return roundNumber(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
