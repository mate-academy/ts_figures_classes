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
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape = Shape.triangle,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('value less than or equal to 0');
    }

    if (this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.b + this.c <= this.a) {
      throw new Error('not a triangle');
    }
  }

  getArea():number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape = Shape.circle,
  ) {
    if (this.radius <= 0) {
      throw new Error('value less than or equal to 0');
    }
  }

  getArea():number {
    return this.radius * this.radius * 3.14;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape = Shape.rectangle,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('value less than or equal to 0');
    }
  }

  getArea():number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${+figure.getArea().toFixed(2)}`;
}
