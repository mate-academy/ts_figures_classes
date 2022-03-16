type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea?(): number;
}

abstract class BasicFigure implements Figure {
  protected constructor(
    public shape: Shape,
    public color: Color,
  ) {
    this.shape = shape;
    this.color = color;
  }
}

export class Triangle extends BasicFigure {
  constructor(
    color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    super('triangle', color);

    if (a <= 0 || b <= 0 || c <= 0
      || (2 * Math.max(a, b, c) - a - b - c) >= 0) {
      throw new Error('[Triangle]: invalid sides!');
    }
  }

  getArea(): number {
    const semi = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semi * (semi - this.a) * (semi - this.b) * (semi - this.c),
    );

    return Math.round(area * 100) / 100;
  }
}

export class Circle extends BasicFigure {
  constructor(
    color: Color,
    private radius: number,
  ) {
    super('circle', color);

    if (radius <= 0) {
      throw new Error('[Circle]: invalid radius!');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle extends BasicFigure {
  constructor(
    color: Color,
    private width: number,
    private height: number,
  ) {
    super('rectangle', color);

    if (width <= 0 || height <= 0) {
      throw new Error('[Rectangle]: invalid sides!');
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  // @ts-ignore
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
