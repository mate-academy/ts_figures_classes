enum Snape {
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
  shape: Snape;
  color: Color;
  getArea(): number;
}

export class Triangle {
  shape = Snape.Triangle;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (Math.max(a, b, c) * 2 >= a + b + c || Math.min(a, b, c) <= 0) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const s = (a + b + c) / 2;

    return Math.round(Math.sqrt(s * (s - a) * (s - b) * (s - c)) * 100) / 100;
  }
}

export class Circle {
  shape = Snape.Circle;

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`radius ${radius} can't form a circle`);
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle {
  shape = Snape.Rectangle;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (Math.min(width, height) <= 0) {
      throw new Error(`sides ${width} and ${height} can't form a rectangle`);
    }
  }

  getArea(): number {
    const { width, height } = this;

    return Math.round(width * height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
