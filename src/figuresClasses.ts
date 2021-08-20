enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

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
    this.shape = Shape.triangle;
  }

  getArea(): number {
    const halfPerim: number = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(
      halfPerim
      * (halfPerim - this.a)
      * (halfPerim - this.b)
      * (halfPerim - this.c),
    )).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape;

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    this.shape = Shape.circle;
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return +(3.14 * (this.radius ** 2)).toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = Shape.rectangle;
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
