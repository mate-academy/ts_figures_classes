enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error();
    }

    if (sideA >= sideB + sideC
        || sideB >= sideA + sideC
        || sideC >= sideA + sideB) {
      throw new Error(
        `sides ${sideA}, ${sideB} and ${sideC} can't form a triangle`,
      );
    }
  }

  getArea(): number {
    const p = (this.sideA + this.sideB + this.sideC) / 2;

    return +((p
      * (p - this.sideA)
      * (p - this.sideB)
      * (p - this.sideC)) ** 0.5).toFixed(2);
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius < 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return +(3.14 * this.radius ** 2).toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
  ) {
    if (sideA <= 0 || sideB <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return +(this.sideA * this.sideB).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
