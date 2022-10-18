enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

const roundDown = (num: number): number => Math.floor(num * 100) / 100;

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    const max = Math.max(a, b, c);

    if (
      a <= 0
      || b <= 0
      || c <= 0
      || max >= a + b + c - max
    ) {
      throw new Error('sizes are wrong!');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const semiPerimetr = (a + b + c) / 2;

    return roundDown(Math.sqrt(semiPerimetr
      * (semiPerimetr - a)
      * (semiPerimetr - b)
      * (semiPerimetr - c)));
  }
}

export class Circle {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Wrong radius!');
    }
  }

  getArea(): number {
    return roundDown(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if ([this.width, this.height].some((side) => side <= 0)) {
      throw new Error('sizes are wrong!');
    }
  }

  getArea(): number {
    return roundDown(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
