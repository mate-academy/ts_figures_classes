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
    public side1: number,
    public side2: number,
    public side3: number,
  ) {
    if (side1 <= 0 || side2 <= 0 || side2 <= 0) {
      throw new Error('your error message');
    }

    const sides: number[] = [this.side1, this.side2, this.side3];

    const max: number = Math.max(...sides);

    const sum = sides.filter((a) => a !== max).reduce((a, b) => a + b);

    if (sum <= max) {
      throw new Error('your error message');
    }
  }

  getArea: GetArea = () => {
    const sper = (this.side1 + this.side2 + this.side3) / 2;

    return Math.floor(
      Math.sqrt(
        sper * (sper - this.side1) * (sper - this.side2) * (sper - this.side3),
      ) * 100,
    ) / 100;
  };
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea: GetArea = () => Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public side1: number,
    public side2: number,
  ) {
    if (side1 <= 0 || side2 <= 0) {
      throw new Error('your error message');
    }
  }

  getArea: GetArea = () => this.side1 * this.side2;
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
