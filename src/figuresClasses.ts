enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

enum Shape {
  Ttriangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}
export interface Figure {
  color: Color,
  shape: Shape,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape = Shape.Ttriangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0
      || (a + b) <= c || (b + c) <= a
      || (a + c) <= b) {
      throw new Error("if passed lengths don't form a triangle");
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;

    return Math.sqrt(semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b) * (semiperimeter - this.c));
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('incorrect radius value');
    }
  }

  getArea(): number {
    return 3.14 * (this.radius * this.radius);
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(public color: Color, public a: number, public b: number) {
    if (a <= 0 || b <= 0) {
      throw new Error('enter a number greater than 0 ');
    }
  }

  getArea(): number {
    return (this.a * this.b);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${+figure.getArea().toFixed(2)}`;
}
