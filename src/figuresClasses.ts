export type Color = 'red' | 'green' | 'blue';

enum Shapes {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  shape: Shapes;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shapes = Shapes.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid parameters');
    }

    const max = Math.max(a, b, c);

    if (max >= (a + b + c) - max) {
      throw new Error('Invalid parameters');
    }
  }

  getArea(): number {
    const semiPerimetr = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiPerimetr
      * (semiPerimetr - this.a) * (semiPerimetr - this.b)
      * (semiPerimetr - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shapes = Shapes.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Invalid parameters');
    }
  }

  getArea(): number {
    const areaCircle = Math.PI * this.radius ** 2;

    return Math.floor(areaCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shapes = Shapes.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid parameters');
    }
  }

  getArea(): number {
    const areaRectangle = this.width * this.height;

    return Math.floor(areaRectangle * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
