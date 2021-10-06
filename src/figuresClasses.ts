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
  shape: Shape,
  color: Color,
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0
      || (a + b) >= c
      || (a + c) >= b
      || (c + b) >= a) {
      throw Error();
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Number(Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    )
      .toFixed(2));
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Figure['color'],
    public r: number,
  ) {
    if (r <= 0) {
      throw Error();
    }
  }

  getArea(): number {
    return Number((3.14 * this.r * this.r).toFixed(2));
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Figure['color'],
    public h: number,
    public l: number,
  ) {
    if (h <= 0 || l <= 0) {
      throw Error();
    }
  }

  getArea(): number {
    return Number((this.h * this.l).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
