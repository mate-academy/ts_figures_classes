enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape
  color: Color
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape= Shape.triangle;

  constructor(
    public color: Color,
    public aSide: number,
    public bSide: number,
    public cSide: number,
  ) {
    if (
      aSide + bSide <= cSide
      || aSide + cSide <= bSide
      || cSide + bSide <= aSide
    ) {
      throw new Error();
    }
  }

  getArea(): number {
    const p: number = (this.aSide + this.bSide + this.cSide) / 2;
    const area: number = Math
      .sqrt(p * (p - this.aSide) * (p - this.bSide) * (p - this.cSide));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return Math.round(3.14 * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: object): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
