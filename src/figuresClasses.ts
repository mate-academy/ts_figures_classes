enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public aSide: number,
    public bSide: number,
    public cSide: number,
  ) {
    if (aSide <= 0 || bSide <= 0 || cSide <= 0) {
      throw new Error('One of the triangle sides is less than or equal to 0');
    }

    if (
      aSide + bSide <= cSide ||
      aSide + cSide <= bSide ||
      bSide + cSide <= aSide
    ) {
      throw new Error('The provided sides do not form a valid triangle');
    }
  }

  getArea(): number {
    const semiperimeter = (this.aSide + this.bSide + this.cSide) / 2;
    const area = Math.sqrt(
      semiperimeter *
        (semiperimeter - this.aSide) *
        (semiperimeter - this.bSide) *
        (semiperimeter - this.cSide),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius of the circle must be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        'The width and height of the rectangle must be greater than 0',
      );
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const { shape, color } = figure;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
