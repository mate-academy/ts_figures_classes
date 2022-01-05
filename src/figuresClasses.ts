enum Shapes {
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
  shape: Shapes;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes = Shapes.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      this.a <= 0
  || this.b <= 0
  || this.c <= 0
  || this.a + this.b <= this.c
  || this.b + this.c <= this.a
  || this.a + this.c <= this.b
    ) {
      throw new Error('not a valid triangle');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const S = (Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)));

    return Math.floor(S * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shapes = Shapes.Circle;

  constructor(public color: Color, public radius: number) {
    if (this.radius <= 0) {
      throw new Error('not a valid circle');
    }
  }

  getArea(): number {
    const S: number = (Math.PI * this.radius * this.radius);

    return Math.floor(S * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = Shapes.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('not a valid rectangle');
    }
  }

  getArea(): number {
    const S: number = (this.height * this.width);

    return Math.floor(S * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
