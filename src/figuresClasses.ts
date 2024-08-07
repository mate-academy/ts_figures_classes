enum ShapeType {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum ColorType {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: ShapeType;
  color: ColorType;
  getArea(): number;
}

function checkOnError(condition: boolean, errorMessage: string): void {
  if (condition) {
    throw new Error(errorMessage);
  }
}

export class Triangle implements Figure {
  public shape: ShapeType = ShapeType.Triangle;

  constructor(
    public color: ColorType,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    checkOnError(
      sideA <= 0 || sideB <= 0 || sideC <= 0,
      'All sides must be greater than zero',
    );

    const isInvalidTriangle =
      Math.max(sideA, sideB, sideC) >=
      sideA + sideB + sideC - Math.max(sideA, sideB, sideC);

    checkOnError(
      isInvalidTriangle,
      'The longest side must be less than the sum of the other sides',
    );
  }

  getArea(): number {
    const { sideA, sideB, sideC } = this;
    const semiPerimeter: number = (sideA + sideB + sideC) / 2;
    const area: number = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - sideA) *
        (semiPerimeter - sideB) *
        (semiPerimeter - sideC),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: ShapeType = ShapeType.Circle;

  constructor(
    public color: ColorType,
    public radius: number,
  ) {
    checkOnError(radius <= 0, 'Radius must be greater than zero');
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: ShapeType = ShapeType.Rectangle;

  constructor(
    public color: ColorType,
    public width: number,
    public height: number,
  ) {
    checkOnError(
      width <= 0 || height <= 0,
      'Width and height must be greater than zero',
    );
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
