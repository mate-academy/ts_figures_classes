enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Negative sides are not allowed');
    }

    if (!Triangle.isValidTriangle(a, b, c)) {
      throw new Error(
        'Invalid triangle: Sum of two sides must exceed the third side.',
      );
    }
  }

  static isValidTriangle(
    firstSide: number,
    secondSide: number,
    thirdSide: number,
  ): boolean {
    const maxSide = Math.max(firstSide, secondSide, thirdSide);

    return maxSide < firstSide + secondSide + thirdSide - maxSide;
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiperim = (a + b + c) / 2;

    return (
      Math.floor(
        Math.sqrt(
          semiperim * (semiperim - a) * (semiperim - b) * (semiperim - c),
        ) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(
        'Invalid radius for circle: radius must be greater than 0.',
      );
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0) {
      throw new Error(
        'Invalid dimension for rectangle: width must be greater than 0.',
      );
    }

    if (height <= 0) {
      throw new Error(
        'Invalid dimension for rectangle: height must be greater than 0.',
      );
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
