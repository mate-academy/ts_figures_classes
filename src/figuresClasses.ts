enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  color: Color;
  shape: Shape,
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    readonly color: Color,
    readonly a: number,
    readonly b: number,
    readonly c: number,
  ) {
    if (Math.max(a, b, c) * 2 >= a + b + c || Math.min(a, b, c) <= 0) {
      throw new Error(`sides ${a}, ${b} and ${c}, can't form a ${this.shape}`);
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;

    return Math.round(Math.sqrt(s * ((s - a) * (s - b) * (s - c))) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    readonly color: Color,
    readonly radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`radius ${radius}, can't form a ${this.shape}`);
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    readonly color: Color,
    readonly width: number,
    readonly height: number,
  ) {
    if (Math.min(width, height) <= 0) {
      throw new Error(
        `Value ${width} and ${height}, can't form a ${this.shape}`,
      );
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
