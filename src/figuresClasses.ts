export enum Shape {
  Triangle = 'triangle',
  Rectangle = 'rectangle',
  Circle = 'circle',
}

export enum Color {
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
  public readonly shape: Shape = Shape.Triangle;

  constructor(
    public readonly color: Color,
    public readonly a: number,
    public readonly b: number,
    public readonly c: number,
  ) {
    if ([a, b, c].some((side) => side <= 0)) {
      throw new Error('All sides must be > 0');
    }

    const longestSide = Math.max(a, b, c);
    const otherSides = [a, b, c].filter((side) => side !== longestSide);

    if (longestSide >= otherSides[0] + otherSides[1]) {
      throw new Error(
        `Triangle with sides [ a = ${a}, b = ${b}, c = ${c} ] is impossible`,
      );
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;

    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public readonly shape: Shape = Shape.Circle;

  constructor(
    public readonly color: Color,
    public readonly radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be > 0');
    }
  }

  getArea(): number {
    const { radius: r } = this;

    const area = Math.PI * r * r;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public readonly shape: Shape = Shape.Rectangle;

  constructor(
    public readonly color: Color,
    public readonly width: number,
    public readonly height: number,
  ) {
    if ([width, height].some((side) => side <= 0)) {
      throw new Error('All sides must be > 0');
    }
  }

  getArea(): number {
    const { width, height } = this;

    const area = width * height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  const area = Math.round(figure.getArea() * 100) / 100;

  return `A ${color} ${shape} - ${area}`;
}
