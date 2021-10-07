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
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('All sides should be positive numbers');
    }

    if (this.a >= this.b + this.c
      || this.b >= this.a + this.c
      || this.c >= this.b + this.a) {
      throw new Error('Such sides cannot form a triangle');
    }
  }

  getArea(): number {
    const perimetr = (this.a + this.b + this.c) / 2;

    return Math.sqrt(perimetr * (perimetr - this.a)
    * (perimetr - this.b)
    * (perimetr - this.c));
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius should be positive number');
    }
  }

  getArea(): number {
    return 3.14 * this.radius ** 2;
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
      throw new Error('Width and height should be positive numbers');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  const result = `A ${figure.color}`
  + ` ${figure.shape} - ${+figure.getArea().toFixed(2)}`;

  return result;
}
