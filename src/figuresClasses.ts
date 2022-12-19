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
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = Shape.Triangle;

    const isImpossibleTriangel = (
      a <= 0
      || b <= 0
      || c <= 0
      || a >= b + c
      || b >= a + c
      || c >= a + b
    );

    if (isImpossibleTriangel) {
      throw new Error('Impossible Triangel');
    }
  }

  getArea(): number {
    const SemiPerimeter = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      SemiPerimeter * (SemiPerimeter - this.a)
      * (SemiPerimeter - this.b) * (SemiPerimeter - this.c),
    );

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = Shape.Circle;

    const isImpossibleCircle = radius <= 0;

    if (isImpossibleCircle) {
      throw new Error('Impossible Circle');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius * this.radius);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width : number,
    public height : number,
  ) {
    this.shape = Shape.Rectangle;

    const isImpossibleRectangle = this.width <= 0 || this.height <= 0;

    if (isImpossibleRectangle) {
      throw new Error('Impossible Rectangle');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
