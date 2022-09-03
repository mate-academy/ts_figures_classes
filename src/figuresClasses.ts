enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green ' | 'blue';

interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

const checkSides = (...args: number[]): boolean => args.some(
  (side) => side <= 0,
);

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (checkSides(a, b, c)) {
      throw new Error('Wrong side length! Make number bigger than 0.');
    }

    if (this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.c + this.a <= this.b) {
      throw new Error('Sum of two sides is shorter than third side');
    }
  }

  getArea(): number {
    const halfOfPerimeter: number = (this.a + this.b + this.c) / 2;

    return Number(Math.sqrt(
      halfOfPerimeter * (halfOfPerimeter - this.a)
       * (halfOfPerimeter - this.b) * (halfOfPerimeter - this.c),
    ).toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Wrong radius! Make number bigger than 0.');
    }
  }

  getArea(): number {
    return +(Math.floor(Math.PI * this.radius ** 2 * 100) / 100);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public heigth: number,
  ) {
    if (width <= 0 || heigth <= 0) {
      throw new Error('Wrong side length! Make number bigger than 0.');
    }
  }

  getArea():number {
    return (this.width * this.heigth);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
