enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: 'red'| 'green' | 'blue';
  getArea: () => number;
}

type Color = 'red'| 'green' | 'blue';

export class Triangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = Shape.Triangle;

    const sortedSides: number[] = [a, b, c]
      .sort((first, second) => second - first);

    if ((sortedSides[0] >= sortedSides[1] + sortedSides[2])
    || sortedSides.some((side) => side === 0)) {
      throw new Error(`${this.shape} cannot be created with your parameters`);
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area = (Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = Shape.Circle;

    if (radius <= 0) {
      throw new Error(`${this.shape} cannot be created with your parameters`);
    }
  }

  getArea(): number {
    return Math.trunc(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    this.shape = Shape.Rectangle;

    if (a <= 0 || b <= 0) {
      throw new Error(`${this.shape} cannot be created with your parameters`);
    }
  }

  getArea(): number {
    return Math.round((this.a * this.b) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
