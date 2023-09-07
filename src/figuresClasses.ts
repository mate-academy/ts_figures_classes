enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  color: Color;
  shape: Shape;

  getArea(): number;
}

const roundToTwoDigits = (area: number): number => {
  return Math.floor(area * 100) / 100;
};

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('side length cannot be negative or zero');
    }

    const longestSide = Math.max(a, b, c);
    const otherSidesSum = a + b + c - longestSide;

    if (longestSide >= otherSidesSum) {
      // eslint-disable-next-line max-len
      throw new Error('longest side cannot be equal to or greater than the sum of two other sides');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiPerimeter = 0.5 * (a + b + c);
    const area = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - a)
      * (semiPerimeter - b)
      * (semiPerimeter - c),
    );

    return roundToTwoDigits(area);
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius cannot be negative or zero');
    }
  }

  getArea(): number {
    return roundToTwoDigits(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('width and height cannot be negative or zero');
    }
  }

  getArea(): number {
    return roundToTwoDigits(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  const { shape, color } = figure;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
