enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export interface Figure {
  shape: Shape;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public side1: number,
    public side2: number,
    public side3: number,
  ) {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      throw new Error('sides a, b and c can\'t form a triangle');
    }

    const sides = [side1, side2, side3].sort((a, b) => b - a);

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error('It is not a triangle');
    }
  }

  shape = Shape.Triangle;

  getArea(): number {
    const perimeter = (this.side1 + this.side2 + this.side3) / 2;
    const square = Math.sqrt(perimeter
      * (perimeter - this.side1)
      * (perimeter - this.side2)
      * (perimeter - this.side3));

    return Math.round(square * 100) / 100;
  }
}
export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius is not valid. It should be a positive number');
    }
  }

  shape = Shape.Circle;

  getArea(): number {
    const square = 3.14 * this.radius ** 2;

    return Math.round(square * 100) / 100;
  }
}
export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Side is not valid. It should be a positive number');
    }
  }

  shape = Shape.Rectangle;

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
