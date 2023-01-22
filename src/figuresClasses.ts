export enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export enum Colors {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

function toFixed(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  shape = Shapes.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides: number[] = [a, b, c];

    sides.sort((x, y) => x - y);

    if (sides.some((side) => side <= 0)) {
      throw Error('One side of the sides less then 0');
    }

    if (sides[0] >= sides[1] + sides[2]) {
      throw Error('This is not Triangle');
    }
  }

  getArea(): number {
    const sum = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      sum * (sum - this.a) * (sum - this.b) * (sum - this.c),
    );

    return toFixed(area);
  }
}

export class Circle implements Figure {
  shape = Shapes.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw Error('This is not a circle');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return toFixed(area);
  }
}

export class Rectangle implements Figure {
  public shape = Shapes.Rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw Error('This is not rectangle');
    }
  }

  getArea(): number {
    const { width, height } = this;
    const area = width * height;

    return toFixed(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
