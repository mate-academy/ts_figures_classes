type Color = 'red' | 'green' | 'blue';
enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

function getAreaOfTheFigures(
  figure: Shape, a: number, b: number = 0, c: number = 0,
):number {
  let area: number;

  switch (figure) {
    case Shape.Triangle: {
      const semiPerimeter = (a + b + c) / 2;

      area = Math.sqrt(semiPerimeter
          * (semiPerimeter - a)
          * (semiPerimeter - b)
          * (semiPerimeter - c));
      break;
    }

    case Shape.Circle:
      area = Math.PI * (a ** 2);
      break;

    default:
      area = a * b;
      break;
  }

  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The sides of the triangle must be greater than zero');
    }

    if (Math.max(a, b, c) >= (a + b + c) / 2) {
      throw new Error('The sides of the triangle can not form a triangle');
    }
  }

  getArea(): number {
    return getAreaOfTheFigures(this.shape, this.a, this.b, this.c);
  }
}

export class Circle implements Figure {
  public shape:Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius of the circle must be greater than zero');
    }
  }

  getArea(): number {
    return getAreaOfTheFigures(this.shape, this.radius);
  }
}

export class Rectangle implements Figure {
  public shape:Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('The sides of the rectangle must be greater than zero');
    }
  }

  getArea(): number {
    return getAreaOfTheFigures(this.shape, this.width, this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
