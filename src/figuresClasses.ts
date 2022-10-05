type Color = 'red'| 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = Shape.Triangle,
  ) {
    if (this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.b + this.c <= this.a) {
      throw new Error('Triangle is invalid');
    }
  }

  public getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return Math.round(Math
      .sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100) / 100;
  }
}

export class Circle {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = Shape.Circle,
  ) {
    if (this.radius <= 0) {
      throw new Error('Error. Radius must be > 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape = Shape.Rectangle,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Error. Sides must be > 0');
    }
  }

  public getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
