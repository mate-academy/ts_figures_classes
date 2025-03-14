enum Shape {
  Triangle = `triangle`,
  Circle = `circle`,
  Rectangle = `rectangle`,
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(`Sides of Triangle must be more than 0`);
    }

    const sortedSides = [a, b, c].sort((x, y) => y - x);

    if (sortedSides[0] >= sortedSides[1] + sortedSides[2]) {
      throw new Error(
        // eslint-disable-next-line max-len
        'The longest side of a triangle must be smoller than a sum of two others',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius of Circle must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public length: number,
  ) {
    if (width <= 0 || length <= 0) {
      throw new Error('Width and length of Rectangle must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.length * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
