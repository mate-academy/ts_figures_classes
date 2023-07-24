type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
}

interface ITriangle extends Figure {
  side1: number,
  side2: number,
  side3: number,
}

interface ICircle extends Figure {
  radius: number
}

interface IRectangle extends Figure {
  width: number,
  height: number,
}

function throwErrorOnNegativeValue(variable: number): Error | void {
  if (variable <= 0) {
    throw new Error('This side can\'t be less than 0');
  }
}

const throwErrorTriangle = (): Error => {
  throw new Error(
    'This triangle does not exist. Sum of 2 sides must be more than 3rd side',
  );
};

export class Triangle implements ITriangle {
  readonly shape: 'triangle';

  constructor(
    readonly color: Color,
    readonly side1: number,
    readonly side2: number,
    readonly side3: number,
  ) {
    throwErrorOnNegativeValue(side1);
    throwErrorOnNegativeValue(side2);
    throwErrorOnNegativeValue(side3);

    if (
      !(side1 + side2 > side3)
      || !(side2 + side3 > side1)
      || !(side1 + side3 > side2)
    ) {
      throwErrorTriangle();
    }

    this.color = color;
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.shape = 'triangle';
  }

  getArea(): number {
    const halfP
      = Math.floor((this.side1 + this.side2 + this.side3) * 50) / 100;
    const square = (
      halfP
      * (halfP - this.side1)
      * (halfP - this.side2)
      * (halfP - this.side3)) ** 0.5;

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements ICircle {
  readonly shape: 'circle';

  constructor(
    readonly color: Color,
    readonly radius: number,
  ) {
    throwErrorOnNegativeValue(radius);
    this.color = color;
    this.radius = radius;
    this.shape = 'circle';
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements IRectangle {
  readonly shape = 'rectangle';

  constructor(
    readonly color: Color,
    readonly width: number,
    readonly height: number,
  ) {
    throwErrorOnNegativeValue(width);
    throwErrorOnNegativeValue(height);
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Math.trunc(this.width * this.height * 100) / 100;
  }
}

type Figures = Circle | Rectangle | Triangle;

export function getInfo(figure: Figures): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
