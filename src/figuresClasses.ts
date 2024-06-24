type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function checkOnError(errorMessage: string, ...sides: number[]): void {
  if (sides.some((side) => side <= 0)) {
    throw new Error(errorMessage);
  }
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const triangleErrorMessage =
      'Invalid triangle sides: ensure all sides are positive.';

    checkOnError(triangleErrorMessage, a, b, c);

    const sideOfTriangle = [a, b, c].sort((a1, b1) => b1 - a1);
    const condition =
      sideOfTriangle[0] >= sideOfTriangle[1] + sideOfTriangle[2];

    if (condition) {
      throw new Error(triangleErrorMessage);
    }
  }

  getArea(): number {
    const s = (1 / 2) * (this.a + this.b + this.c);
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    const circleErrorMessage =
      'Invalid radius: radius must be a positive number.';

    checkOnError(circleErrorMessage, radius);
  }

  getArea(): number {
    return Math.floor(this.radius ** 2 * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    const rectangleErrorMessage = 'Width and height must be greater than zero.';

    checkOnError(rectangleErrorMessage, width, height);
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
