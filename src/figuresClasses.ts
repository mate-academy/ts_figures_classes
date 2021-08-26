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
  shape : Shape,
  color : Color,
  getArea(): number,
}

export class Triangle implements Figure {
  constructor(
    public color : Color,
    public a: number,
    public b: number,
    public c: number,
    public shape = Shape.triangle,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('error');
    }

    if (this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.c + this.a <= this.b) {
      throw new Error('error');
    }
  }

  getArea() :number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
  }
}

export class Circle implements Figure {
  constructor(
    public color : Color,
    public radius: number,
    public shape = Shape.circle,
  ) {
    if (radius <= 0) {
      throw new Error('Not valid value');
    }
  }

  getArea() :number {
    return 3.14 * (this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  constructor(
    public color : Color,
    public a: number,
    public b: number,
    public shape = Shape.rectangle,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Not valid value');
    }
  }

  getArea() :number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${+figure.getArea().toFixed(2)}`;
}
