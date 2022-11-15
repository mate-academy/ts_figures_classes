enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}
type Color = 'red' | 'green' | 'blue';

export type Figure = {
  shape: Shape;
  color: Color;

  getArea(): number;
};

export function roundArea(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public side1: number,
    public side2: number,
    public side3: number,
  ) {
    const isTriangle: boolean
    = side1 + side2 <= side3
    || side2 + side3 <= side1
    || side3 + side1 <= side2;

    if (isTriangle) {
      throw new Error(
        'The longest side must be smaller than sum of two others!',
      );
    }

    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      throw new Error(
        'Side must be greater than zero!',
      );
    }
  }

  getArea(): number {
    const { side1, side2, side3 } = this;
    const s: number = (side1 + side2 + side3) / 2;
    const area: number = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));

    return roundArea(area);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius must be geater than zero!');
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius ** 2;

    return roundArea(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public side1: number,
    public side2: number,
  ) {
    if (side1 <= 0 || side2 <= 0) {
      throw new Error('side must be geater than zero!');
    }
  }

  getArea():number {
    const { side1, side2 } = this;
    const area: number = side1 * side2;

    return roundArea(area);
  }
}

export function getInfo(figure: Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
