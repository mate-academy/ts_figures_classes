type Color = 'red'|'green'|'blue';
type Shape = 'triangle'|'circle'|'rectangle';

function roundedSquare(square: number): number {
  return Math.floor(square * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error("All triangle's sides should be more then zero");
    }

    if (a >= (b + c) || b >= (a + c) || c >= (b + a)) {
      throw new Error('Any side must be less than the sum of two other sides');
    }
  }

  getArea(): number {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;
    const triangleSquare: number
     = ((semiPerimeter * (semiPerimeter - this.a)
      * (semiPerimeter - this.b) * (semiPerimeter - this.c)) ** 0.5);

    return roundedSquare(triangleSquare);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be more than zero');
    }
  }

  getArea(): number {
    const circleSquare: number = Math.PI * (this.radius ** 2);

    return roundedSquare(circleSquare);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Neither width nor height can be negative!');
    }
  }

  getArea(): number {
    const rectangleSquare: number = this.width * this.height;

    return roundedSquare(rectangleSquare);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
