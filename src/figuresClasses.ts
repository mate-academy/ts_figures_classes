export enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export interface Figure {
  color: Color
  shape: Shape
  getArea: () => number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0
      || this.b <= 0
      || this.c <= 0
      || this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.c + this.a <= this.b) {
      throw new Error('False parameters!');
    }
  }

  getArea():number {
    const half = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(half * (half - this.a)
      * (half - this.b) * (half - this.c));

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
      throw new Error('False parameters!');
    }
  }

  getArea():number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('False parameters!');
    }
  }

  getArea() : number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
