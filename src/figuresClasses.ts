enum Shape {
  Triangle = 'triangle',
  Rectangle = 'rectangle',
  Circle = 'circle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number
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

    if (this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.c + this.b <= this.a) {
      throw new Error('Triangle error');
    }
  }

  getArea(): number {
    const per = (this.a + this.b + this.c) / 2;

    return Math.round(
      Math.sqrt(per * (per - this.a) * (per - this.b) * (per - this.c)) * 100,
    ) / 100;
  }
}

export class Circle {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = Shape.Circle;

    if (this.radius <= 0) {
      throw new Error('Circle error');
    }
  }

  getArea(): number {
    return Math.round(3.14 * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = Shape.Rectangle;

    if (this.width <= 0) {
      throw new Error('Width error');
    }

    if (this.height <= 0) {
      throw new Error('Height error');
    }
  }

  getArea(): number {
    return Math.round(this.height * this.width * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
