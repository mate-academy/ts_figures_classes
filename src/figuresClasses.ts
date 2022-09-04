enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      a <= 0
      || b <= 0
      || c <= 0
    ) {
      throw new Error('Every side should be a positive number');
    } else if (
      a >= (b + c)
      || b >= (a + c)
      || c >= (a + b)
    ) {
      throw new Error('The longest side is longer than sum of two others');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const areaOfTriangle = s * (s - this.a) * (s - this.b) * (s - this.c);

    const result = Math.sqrt(areaOfTriangle);

    return Math.floor(result * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be positive number');
    }
  }

  getArea(): number {
    const squareOfCircle = Math.PI * (this.radius ** 2);

    return Math.floor(squareOfCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Every side should be a positive number');
    }
  }

  getArea(): number {
    const areaOfRectangle = this.width * this.height;

    return Math.floor(areaOfRectangle);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
