enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

type Color = 'red' | 'blue' | 'green';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number,
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
      throw new Error('a, b, c sides must be greater than 0');
    }

    if (a >= b + a || b >= a + c || c >= b + a) {
      throw new Error(
        'Invalid value of triangle: one of sides is bigger than sum of two',
      );
    }
  }

  getArea(): number {
    const perimeter: number = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt((perimeter - this.a)
      * (perimeter - this.b) * (perimeter - this.c) * perimeter) * 100)
      / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid radius');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid length of rectangle');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
