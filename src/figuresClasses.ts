type Shape = 'triangle'| 'circle'| 'rectangle';
type Color = 'red'| 'green'| 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const longestSide = [a, b, c].sort((side1, side2) => side2 - side1);

    if (longestSide[0] >= (longestSide[1] + longestSide[2])) {
      throw new Error(
        'The longest side of a triangle must be less than the '
        + 'sum of the other two sides!',
      );
    } else if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be greater than 0!');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2; // find semiperimeter
    const area = Math
      .round(100 * (Math.sqrt(s * (s - a) * (s - b) * (s - c)))) / 100;

    return area;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0!');
    }
  }

  getArea(): number {
    const { radius } = this;
    const square = Math.floor(100 * (Math.PI * (radius * radius))) / 100;

    return square;
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
      throw new Error('Width and height must be greater than 0!');
    }
  }

  getArea(): number {
    const { width, height } = this;
    const area = Math.round(100 * (width * height)) / 100;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  const { shape, color } = figure;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
