enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: 'red' | 'green' | 'blue',

  getArea(): number;
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  private area = 0;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c];

    if (sides.some((side) => side <= 0)) {
      throw new Error('Side values are invalid!');
    } else if (!Triangle.isCanBeTriangle(a, b, c)) {
      throw new Error('Sides a, b and c can\'t form a triangle!');
    }

    const semiperimetr = (a + b + c) / 2;

    this.area = +Math.sqrt(
      sides.reduce((total, side) => {
        return (semiperimetr - side) * total;
      }, semiperimetr),
    ).toFixed(2);
  }

  static isCanBeTriangle(
    a: number,
    b: number,
    c: number,
  ): boolean {
    if (a + b <= c) {
      return false;
    }

    if (a + c <= b) {
      return false;
    }

    if (b + c <= a) {
      return false;
    }

    return true;
  }

  getArea(): number {
    return this.area;
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  private area = 0;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius side can\'t be equal or less than zero!');
    }

    const area = Math.PI * radius * radius;

    this.area = Math.floor(area * 100) / 100;
  }

  getArea(): number {
    return this.area;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  private area = 0;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides can\'t be equal or less than zero!');
    }

    this.area = width * height;
  }

  getArea(): number {
    return this.area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
