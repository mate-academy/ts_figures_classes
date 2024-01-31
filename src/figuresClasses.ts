type Color = 'red' | 'green' | 'blue';

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

export interface Figure {
  shape: Shape,
  color: Color;
  getArea: () => number
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape,
  ) {
    this.shape = Shape.triangle;

    if (
      a <= 0
      || b <= 0
      || c <= 0
      || (a + c <= b)
      || (a + b <= c)
      || (b + c <= a)
    ) {
      throw new Error('error');
    }
  }

  public getArea = (): number => {
    const { a, b, c } = this;

    const semiP = (a + b + c) / 2;
    const area = Math.sqrt(semiP * (semiP - a) * (semiP - b) * (semiP - c));

    return Math.floor(area * 100) / 100;
  };
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape,
  ) {
    this.shape = Shape.circle;

    if (this.radius <= 0) {
      throw new Error('error');
    }
  }

  public getArea = (): number => Math.floor(
    Math.PI * this.radius ** 2 * 100,
  ) / 100;
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public height: number,
    public width: number,
    public shape: Shape,
  ) {
    this.shape = Shape.rectangle;

    if (height <= 0 || width <= 0) {
      throw new Error('error');
    }
  }

  public getArea = (): number => this.width * this.height;
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
