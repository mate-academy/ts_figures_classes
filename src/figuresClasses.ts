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
    const condition = [this.a, this.b, this.c];

    if (condition.some((element, _, arr) => element <= 0
    || element >= arr.reduce((x, y) => x + y) - element)) {
      throw new Error('Wrong triangle parameters');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(s * (s - this.a)
      * (s - this.b)
      * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Wrong radius');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI
      * this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0
      || this.b <= 0) {
      throw new Error('Wrong radius parameters');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
