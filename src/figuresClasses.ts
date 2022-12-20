type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.isValidFigure()) {
      throw new Error('Sizes of triangle are incorrect');
    }
  }

  isValidFigure(): boolean {
    return (
      this.a <= 0
      || this.b <= 0
      || this.c <= 0
      || this.a >= this.b + this.c
      || this.b >= this.a + this.c
      || this.c >= this.a + this.b
    );
  }

  getArea(): number {
    const { a, b, c } = this;
    const halfPerimeter = (a + b + c) / 2;

    const triangleArea = Math.sqrt(
      halfPerimeter * (halfPerimeter - a)
      * (halfPerimeter - b) * (halfPerimeter - c),
    );

    return Math.round(triangleArea * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.isValidFigure()) {
      throw new Error('Circle radius should be more then 0');
    }
  }

  isValidFigure(): boolean {
    return this.radius <= 0;
  }

  getArea(): number {
    const circleArea = Math.PI * this.radius * this.radius;

    return Math.floor(circleArea * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.isValidFigure()) {
      throw new Error('Sizes of rectangle are incorrect');
    }
  }

  isValidFigure(): boolean {
    return this.width <= 0 || this.height <= 0;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Number(area.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
