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
  shape = Shape.Triangle;

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a >= this.b + this.c
      || this.b >= this.a + this.c
      || this.c >= this.b + this.a
      || this.a <= 0
      || this.b <= 0
      || this.c <= 0) {
      throw new Error('The length of triangle is not correct');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))
      .toFixed(2));
  }
}

export class Circle {
  shape = Shape.Circle;

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('the radius is not correct');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle {
  public shape = Shape.Rectangle;

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('the input is not correct');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
