enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape
  color: Color;

  getArea(): number;
}

function isWrongFigure(...args: number[]): boolean {
  return args.some((side) => side <= 0);
}

export class Triangle {
  shape = Shape.Triangle;

  constructor(
    public color: string,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (isWrongFigure(sideA, sideB, sideC)) {
      throw new Error('side must be greater than zero');
    }

    if (sideA >= sideB + sideC
      || sideB >= sideA + sideC
      || sideC >= sideA + sideB
    ) {
      throw new Error(
        'side of the triangle must be less than the sum of the other two',
      );
    }
  }

  getArea(): number {
    const semiPerimetr = (this.sideA + this.sideB + this.sideC) / 2;

    return Math.floor(Math.sqrt(
      semiPerimetr
      * (semiPerimetr - this.sideA)
      * (semiPerimetr - this.sideB)
      * (semiPerimetr - this.sideC),
    ) * 100) / 100;
  }
}

export class Circle {
  shape = Shape.Circle;

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (isWrongFigure(radius)) {
      throw new Error('the radius must be greater than zero');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle {
  shape = Shape.Rectangle;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (isWrongFigure(height, width)) {
      throw new Error('side must be greater than zero');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
