export enum Shape {
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
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('sides a, b and c can\'t form a triangle');
    }

    const sides = [a, b, c].sort((side1, side2) => side2 - side1);

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error('It is not a triangle');
    }
  }

  shape = Shape.Triangle;

  getArea(): number {
    const perimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(perimeter
      * (perimeter - this.a)
      * (perimeter - this.b)
      * (perimeter - this.c));

    return Math.round(area * 100) / 100;
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
    const area = Math.PI * this.radius ** 2;

    return Math.round(area * 100) / 100;
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
