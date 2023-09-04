const errorMessage = {
  wrongLength: 'length is <= 0',
  tooLongSide: 'the longest side of a triangle is >= than a sum of two others',
};

const standardArea = (area: number): number => {
  return Math.floor(area * 100) / 100;
};

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
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(errorMessage.wrongLength);
    }

    if (a >= b + c
      || b >= a + c
      || c >= b + a) {
      throw new Error(errorMessage.tooLongSide);
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiperimeter
        * (semiperimeter - this.a)
        * (semiperimeter - this.b)
        * (semiperimeter - this.c));

    return standardArea(area);
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(errorMessage.wrongLength);
    }
  }

  getArea(): number {
    return standardArea(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(errorMessage.wrongLength);
    }
  }

  getArea(): number {
    return standardArea(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
