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

function area(square: number): number {
  return Math.floor(square * 100) / 100;
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides: number[] = [a, b, c].sort((sideA, sideB) => sideB - sideA);

    if (a < 0 || b < 0 || c < 0) {
      throw new Error('Not a triangle!');
    }

    if (sides[0] >= (sides[1] + sides[2])) {
      throw new Error('Not a triangle!');
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;

    return area(Math.sqrt(halfPerimeter
      * (halfPerimeter - this.a)
      * (halfPerimeter - this.b)
      * (halfPerimeter - this.c)));
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius < 0) {
      throw new Error('Not a circle!');
    }
  }

  getArea(): number {
    return area(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width < 0 || height < 0) {
      throw new Error('Not a rectangle!');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
