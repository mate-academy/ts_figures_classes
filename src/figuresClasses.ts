enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

type GetArea = () => number;
export interface Figure {
  color: Color,
  shape: Shape,
  getArea: GetArea,
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('your error message');
    }

    let sides: number[] = [this.a, this.b, this.c];
    const max: number = Math.max(...sides);

    sides = sides.filter((n) => n !== max);

    const sumOfLess = sides.reduce((x, y) => x + y);

    if (max >= sumOfLess) {
      throw new Error('your error message');
    }
  }

  getArea: GetArea = () => {
    const sum = (this.a + this.b + this.c) / 2;

    return Math.floor(
      Math.sqrt(
        sum * (sum - this.a) * (sum - this.b) * (sum - this.c),
      ) * 100,
    ) / 100;
  };
}

export class Circle {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea: GetArea = () => Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
}

export class Rectangle {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('your error message');
    }
  }

  getArea: GetArea = () => this.a * this.b;
}

export function getInfo(figure: Figure): string {
  const { color, shape, getArea } = figure;

  return `A ${color} ${shape} - ${getArea()}`;
}
