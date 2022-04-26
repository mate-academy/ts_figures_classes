enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
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
      throw new Error('Any triangle side can not = 0 or be less than 0');
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error('The longest side of a triangle'
      + 'can not be geater than a sum of two others');
    }
  }

  getArea(): number {
    const poluperim = (this.a + this.b + this.c) / 2;
    const square = Math.floor(Math.sqrt(poluperim
      * (poluperim - this.a)
      * (poluperim - this.b)
      * (poluperim - this.c))
      * 100) / 100;

    return square;
  }
}

export class Circle implements Figure {
  public shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius of a circle can not = 0 or be less than 0');
    }
  }

  getArea(): number {
    const square = Math.floor(Math.PI * this.radius ** 2 * 100) / 100;

    return square;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.rectangle;

  constructor(
    public color: Color,
    public height: number,
    public width: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Any rectangle side can not = 0 or be less than 0');
    }
  }

  getArea(): number {
    const square = Math.floor(this.width * this.height * 100) / 100;

    return square;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
