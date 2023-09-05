export enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

export enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue'
}

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

function getValidArea(area: number): number {
  return Math.floor(area * 100) / 100;
}

const errorMessage = 'Number can not be less than 0';
const errorMessageTriangle = 'These sides can not be used to form a triangle';

export class Triangle implements Figure {
  shape: Shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error(errorMessage);
    }

    const longestSide = Math.max(a, b, c);

    if ((a + b + c) - longestSide <= longestSide) {
      throw new Error(errorMessageTriangle);
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      halfPerimeter * (halfPerimeter - this.a)
      * (halfPerimeter - this.b)
      * (halfPerimeter - this.c),
    );

    return getValidArea(area);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error(errorMessage);
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return getValidArea(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('Number can not be less than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${area}`;
}
