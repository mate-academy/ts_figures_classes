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

  getArea(): number {
    const { a, b, c } = this;

    const halfPerimeter: number = (a + b + c) / 2;

    return Math.floor(Math.sqrt(halfPerimeter * (halfPerimeter - a)
    * (halfPerimeter - b) * (halfPerimeter - c)) * 100) / 100;
  }

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('One of the inserted lengthes is <= 0');
    }

    if (Math.max(a, b, c) >= a + b + c - Math.max(a, b, c)) {
      throw new Error("Inserted side lengthes can't form a triangle");
    }
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius length is <= 0');
    }
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('One of the length is <= 0');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
