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
  public shape: Shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        'incorrect side lengths, enter the correct values ​​greater than 0',
      );
    }

    const longSide = Math.max(a, b, c);

    if (longSide >= a + b + c - longSide) {
      throw new Error('incorrect side lengths, enter the correct values');
    }
  }

  getArea(): number {
    const perimetr = (this.a + this.b + this.c) / 2;

    return Math.floor(
      Math.sqrt(
        perimetr * (perimetr - this.a)
        * (perimetr - this.b)
        * (perimetr - this.c),
      ) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius is incorrect, enter a value greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        'incorrect side lengths, enter the correct values ​​greater than 0',
      );
    }
  }

  getArea(): number {
    return Math.floor(this.height * this.width * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const { shape, color } = figure;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
