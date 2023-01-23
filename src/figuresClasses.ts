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
  getArea(): number,
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const triangleSides = [a, b, c];
    const sumOfSides = triangleSides.reduce((sum, side) => sum + side, 0);
    const longestSide = Math.max(...triangleSides);

    const isTriangle = longestSide < (sumOfSides - longestSide);
    const isPositive = triangleSides.every((side) => side > 0);

    if (!isTriangle) {
      throw new Error(`${longestSide} is bigger then sum of two other sides`);
    }

    if (!isPositive) {
      throw new Error('All sides should be positive');
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(halfPerimeter * (halfPerimeter - this.a)
    * (halfPerimeter - this.b) * (halfPerimeter - this.c))
      .toFixed(2));
  }
}

export class Circle {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('the radius is not correct');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('the input is not correct');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
