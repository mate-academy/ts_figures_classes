
enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    const isLessZero = a <= 0 || b <= 0 || c <= 0;
    const isCorrectSide = a + b <= c || b + c <= a || c + a <= b;

    if (isLessZero || isCorrectSide) {
      throw new Error('One of Triangle side is not correct.');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const perimetr = (a + b + c) * (1 / 2);
    const area = Math.sqrt(perimetr
      * (perimetr - a)
      * (perimetr - b)
      * (perimetr - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius is not correct');
    }
  }

  getArea(): number {
    const { radius } = this;
    const area = Math.PI * (radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    const isWrongSide = width <= 0 || height <= 0;

    if (isWrongSide) {
      throw new Error('One of Rectangle side is not correct.');
    }
  }

  getArea(): number {
    const { height, width } = this;
    const area = height * width;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
