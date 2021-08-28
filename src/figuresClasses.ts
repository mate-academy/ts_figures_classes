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

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw Error('error');
    } else if (
      this.a + this.b <= this.c
      || this.a + this.c <= b || this.b + this.c <= this.a) {
      throw Error('sides 1, 2 and 3 can\'t form a triangle');
    }
  }

  getArea(): number {
    const per = (this.a + this.b + this.c) / 2;
    const result = Math.sqrt(
      per * (per - this.a) * (per - this.b) * (per - this.c),
    );

    return Math.round(result * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw Error('error');
    }
  }

  getArea(): number {
    return Math.round(3.14 * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw Error('error');
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
