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
    const validSides = triangleSides.every((side) => side > 0);

    triangleSides.sort((side1, side2) => side1 - side2);

    const bigSide = triangleSides[triangleSides.length - 1];
    const sumOfSmall = triangleSides[0] + triangleSides[1];

    if (!validSides) {
      throw new Error('Triangle sides must have valid value');
    } else if (bigSide >= sumOfSmall) {
      throw new Error('Figure is not a triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const s: number = (a + b + c) / 2;

    return Number((Math.sqrt(s * (s - a) * (s - b) * (s - c))).toFixed(2));
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('There is no circle');
    }
  }

  getArea(): number {
    return (Math.floor(((this.radius * this.radius) * Math.PI) * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('There is no rectangle');
    }
  }

  getArea(): number {
    return (this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
