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

function getRoundedNumber(number: number): number {
  return Math.floor(number * 100) / 100;
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Your triangle must have sides with positive number');
    }

    const longestSide = Math.max(a, b, c);
    const otherSides = a + b + c - longestSide;

    if (otherSides <= longestSide) {
      throw new Error('The figure with such sides is not a tringle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return getRoundedNumber(area);
  }
}
export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Your circle must have radius with positive number');
    }
  }

  getArea(): number {
    const { radius } = this;
    const area = Math.PI * (radius ** 2);

    return getRoundedNumber(area);
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Your rectangle must have sides with positive number');
    }
  }

  getArea(): number {
    const { width, height } = this;
    const area = width * height;

    return getRoundedNumber(area);
  }
}

export function getInfo(figure: Figure): string {
  const roundedArea = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${roundedArea}`;
}
