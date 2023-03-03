export interface Figure {
  shape: string;
  color: string;
  getArea: () => number;
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sidesArray = [a, b, c];
    const longestSide = sidesArray.splice(
      sidesArray.indexOf(Math.max(...sidesArray)), 1,
    );
    const sumOfOtherSides = sidesArray.reduce((prev, cur) => prev + cur);

    if ((longestSide[0]) >= sumOfOtherSides || a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        `sides ${this.a}, ${this.b} and ${this.c} can't form a ${this.shape}`,
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const triangleArea
    = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(triangleArea * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`radius ${this.radius} can't form a ${this.shape}}`);
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
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
      throw new Error(
        `sides ${this.width} and ${this.height} can't form a ${this.shape}`,
      );
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
