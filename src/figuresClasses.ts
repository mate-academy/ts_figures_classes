enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides: number[] = [a, b, c].sort((sa, sb) => sb - sa);

    if (sides[0] - sides[1] - sides[2] >= 0
      || sides[0] <= 0
      || sides[1] <= 0
      || sides[2] <= 0
    ) {
      throw new Error('Please enter valid numbers');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const h = (a + b + c) / 2;

    return Math.floor(100 * Math.sqrt(h * (h - a) * (h - b) * (h - c))) / 100;
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(100 * (Math.PI * (this.radius ** 2))) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width or Height must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(100 * (this.width * this.height)) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
