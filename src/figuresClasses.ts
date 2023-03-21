enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,

  getArea: () => number;
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius cannot be less or equal 0');
    }
  }

  getArea(): number {
    const square = +(Math.PI * (this.radius ** 2));

    return Math.floor(square * 100) / 100;
  }
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a >= (b + c) || b >= (a + c) || c >= (b + a)) {
      throw new Error('These sides cannot form a triangle');
    } else if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('These sides cannot be less or equal 0');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const square = (p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5;

    return +square.toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public height: number,
    public width: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('Height and width cannot be less than or equal to 0');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
