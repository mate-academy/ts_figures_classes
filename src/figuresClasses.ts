enum Shape {
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
  shape: Shape;
  color: Color;

  getArea(): number;
}

const figureChecking = (...sides: number[]): boolean => {
  return sides.some((side) => (side <= 0));
};

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (figureChecking(sideA, sideB, sideC)) {
      throw new Error('Passed value must be more than 0');
    }

    if (
      sideA + sideB <= sideC
      || sideB + sideC <= sideA
      || sideC + sideA <= sideB
    ) {
      throw new Error('Side X is longer than sum of Y and Z');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.sideA + this.sideB + this.sideC) / 2;

    const area = Math.sqrt(
      semiPerimeter
        * (semiPerimeter - this.sideA)
        * (semiPerimeter - this.sideB)
        * (semiPerimeter - this.sideC),
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
    if (figureChecking(radius)) {
      throw new Error('Passed value must be more than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (figureChecking(width, height)) {
      throw new Error('Width and height must be more than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
