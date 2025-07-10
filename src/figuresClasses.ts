type Color = 'red' | 'green' | 'blue';

enum Shapes {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

const errorMessage = 'Parameter is invalid!';

export interface Figure {
  shape: Shapes;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shapes = Shapes.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const positiveSideLength = a > 0 && b > 0 && c > 0;
    const sidesArr = [a, b, c];
    const longestSide = Math.max(...sidesArr);
    const sumOfOthers =
      sidesArr.reduce((sum, side) => sum + side, 0) - longestSide;

    if (!positiveSideLength || longestSide >= sumOfOthers) {
      throw new Error(errorMessage);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area =
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100;

    return area;
  }
}

export class Circle implements Figure {
  public shape: Shapes = Shapes.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(errorMessage);
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shapes = Shapes.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(errorMessage);
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const shape = figure.shape;
  const color = figure.color;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
