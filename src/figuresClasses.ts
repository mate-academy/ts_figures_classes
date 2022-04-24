enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

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
    const triangleSemiPerimeter = (this.a + this.b + this.c) / 2;
    const triangleSquare = Math.floor(Math.sqrt(triangleSemiPerimeter
        * (triangleSemiPerimeter - this.a)
        * (triangleSemiPerimeter - this.b)
        * (triangleSemiPerimeter - this.c))
        * 100) / 100;

    return triangleSquare;
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius of a circle can not = 0 or be less than 0');
    }
  }

  getArea(): number {
    const circleSquare = Math.floor(Math.PI * this.radius ** 2 * 100) / 100;

    return circleSquare;
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
      throw new Error('Any rectangle side can not = 0 or be less than 0');
    }
  }

  getArea(): number {
    const rectangleSquare = Math.floor(this.width * this.height * 100) / 100;

    return rectangleSquare;
  }
}

export function getInfo(figure: Figure) : string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
