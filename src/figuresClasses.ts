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
  getArea() : number,
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

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Zero or sub-zero value was given!');
    }

    if ((this.a + this.b) <= this.c
    || (this.a + this.c) <= this.b
    || (this.b + this.c) <= this.a) {
      throw new Error(
        'sides a, b and c can not form a triangle',
      );
    }
  }

  getArea(): number {
    const sides: number = (this.a + this.b + this.c) * 0.5;

    return Math.round(
      Math.sqrt(sides * (sides - this.a) * (sides - this.b) * (sides - this.c))
      * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = Shape.Circle;

    if (this.radius <= 0) {
      throw new Error('Zero or sub-zero value was given!');
    }
  }

  getArea(): number {
    return +(3.14 * (this.radius ** 2)).toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = Shape.Rectangle;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Zero or sub-zero value was given!');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
