enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const arrOfSides = [a, b, c].sort((x, y) => x - y);

    if (arrOfSides[2] >= arrOfSides[0] + arrOfSides[1]
      || a < 0 || b < 0 || c < 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(s * (
      s - this.a) * (s - this.b) * (s - this.c)).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public r: number,
  ) {
    if (r < 0) {
      throw new Error('ERROR');
    }
  }

  getArea(): number {
    const area = Math.PI * this.r * this.r * 100;

    return Math.trunc(area) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width < 0 || height < 0) {
      throw new Error('ERROR');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
