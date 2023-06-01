type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: string;
  color: Color;
  radius?: number;
  sides?: number[];
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  public sides: number[] = [];

  constructor(public color: Color, ...sides: number[]) {
    const longestSide = Math.max(...sides);
    const sumOfAllSides = sides.reduce((perimiter, side) => perimiter + side);
    const sumOfSmallSides = sumOfAllSides - longestSide;

    if (longestSide >= sumOfSmallSides
      || sides[0] <= 0 || sides[1] <= 0 || sides[2] <= 0
    ) {
      throw new Error('Triangle with given sides isn\'t exist');
    }

    this.color = color;
    this.sides = sides;
  }

  getArea(): number {
    const sideA = this.sides[0];
    const sideB = this.sides[1];
    const sideC = this.sides[2];

    const semiPerimeter = (sideA + sideB + sideC) / 2;
    const area = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - sideA)
      * (semiPerimeter - sideB)
      * (semiPerimeter - sideC),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('Circle with given radius isn\'t exist');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const { radius } = this;
    const area = Math.PI * (radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  public sides = [];

  constructor(public color: Color, ...sides: number[]) {
    if (sides[0] <= 0 || sides[1] <= 0) {
      throw new Error('Rectangle with given sides isn\'t exist');
    }

    this.color = color;
    this.sides = sides;
  }

  getArea(): number {
    const sideA = this.sides[0];
    const sideB = this.sides[1];
    const area = sideA * sideB;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
