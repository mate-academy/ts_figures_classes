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
    private a: number,
    private b: number,
    private c: number,
  ) {
    const isValidLength: boolean = this.a <= 0 || this.b <= 0 || this.c <= 0;
    const isValidSides: boolean = (this.a + this.b) <= this.c
    || (this.a + this.c) <= this.b
    || (this.c + this.b) <= this.a;

    if (isValidLength) {
      throw new Error('Sides must be bigger than 0');
    }

    if (isValidSides) {
      throw new Error('The longest side of a triangle must be '
      + 'bigger than a sum of two others');
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(halfPerimeter * (halfPerimeter - this.a)
    * (halfPerimeter - this.b) * (halfPerimeter - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must be bigger than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (this.width <= 0
      || this.height <= 0
    ) {
      throw new Error('Sides must be bigger than 0');
    }
  }

  getArea(): number {
    return Math.floor(this.height * this.width * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
