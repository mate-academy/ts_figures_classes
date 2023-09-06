enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

const ERRORS = {
  onlyPositive: 'All numbers must be positive',
  longestSide: 'The longest side of a triangle is >= than a sum of two others',
};

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: () => number,
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(ERRORS.onlyPositive);
    }

    if (a + c <= b || a + b <= c || c + b <= a) {
      throw new Error(ERRORS.longestSide);
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const halfPerimeter = (a + b + c) / 2;
    const area = Math.sqrt(
      halfPerimeter
      * (halfPerimeter - a)
      * (halfPerimeter - b)
      * (halfPerimeter - c),
    );

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error(ERRORS.onlyPositive);
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2) * 100;

    return Math.floor(area) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error(ERRORS.onlyPositive);
    }
  }

  getArea(): number {
    const { width, height } = this;

    return Number((width * height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;
  const square = figure.getArea();

  return `A ${color} ${shape} - ${square}`;
}
