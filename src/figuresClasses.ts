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
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      this.a <= 0
      || this.b <= 0
      || this.c <= 0
      || this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.b + this.c <= this.a
    ) {
      throw new Error('This triangle is not mathematically possible...  :C  ');
    }
  }

  getArea(): number {
    const halfOfPerimeter = (this.a + this.b + this.c) / 2;
    const triangleArea = Math.sqrt(halfOfPerimeter * (halfOfPerimeter - this.a)
    * (halfOfPerimeter - this.b) * (halfOfPerimeter - this.c));

    return Math.round(triangleArea * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circles without radii cannot exist...  :C  ');
    }
  }

  getArea(): number {
    const circleArea = Math.PI * this.radius ** 2;

    return Math.floor(circleArea * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('This rectangle cannot exist');
    }
  }

  getArea(): number {
    const rectangleArea = this.width * this.height;

    return rectangleArea;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
