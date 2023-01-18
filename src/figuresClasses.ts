enum Color {
  Red = 'red',
  Blue = 'blue',
  Green = 'green',
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
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
    const triangleSides = [a, b, c];
    const sumOfSides = triangleSides.reduce((sum, side) => sum + side, 0);
    const longestSide = Math.max(...triangleSides);

    const validTriangle = longestSide < (sumOfSides - longestSide);
    const isPositive = triangleSides.every((side) => side > 0);

    if (!validTriangle) {
      throw new Error(`${longestSide} is bigger then sum of two other sides`);
    }

    if (!isPositive) {
      throw new Error('All sides should be positive');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be positive');
    }
  }

  getArea(): number {
    const area = (this.radius ** 2) * Math.PI;

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
      throw new Error('All sides should be positive');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
