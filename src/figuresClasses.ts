enum Shape {
  triangle = 'triangle',
  circle= 'circle',
  rectangle = 'rectangle',
}
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be equal and less than 0!');
    }

    if (a >= b + c || b >= a + c || c >= b + a) {
      throw new Error('One of the sides can\'t be bigger than two others!');
    }
  }

  getArea(): number {
    const semiPerimeters = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(semiPerimeters
      * (semiPerimeters - this.a)
      * (semiPerimeters - this.b)
      * (semiPerimeters - this.c));

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be less than 0!');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides must be equal and less than 0!');
    }
  }

  getArea(): number {
    return Math.floor(((this.width * this.height) * 100) / 100);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
