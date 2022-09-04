enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

function checkLength(...args: number[]): void {
  if (args.some((element) => element <= 0)) {
    throw new Error('Wrong length of side/s!');
  }
}

function roundNumber(num: number): number {
  return Math.floor(num * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public side1: number,
    public side2: number,
    public side3: number,
  ) {
    checkLength(side1, side2, side3);

    if (side1 >= (side2 + side3)
    || side2 >= (side3 + side1)
    || side3 >= (side1 + side2)) {
      throw new Error('Sides 1, 2 and 3 can not form a triangle');
    }
  }

  getArea(): number {
    const halfPerimetr = (this.side1 + this.side2 + this.side3) / 2;

    const perimetr = halfPerimetr * (halfPerimetr - this.side1)
    * (halfPerimetr - this.side2) * (halfPerimetr - this.side3);

    const resultPerimetr: number = Math.sqrt(perimetr);

    return roundNumber(resultPerimetr);
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    checkLength(radius);
  }

  getArea(): number {
    const radiusResult = Math.PI * (this.radius ** 2);

    return roundNumber(radiusResult);
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    checkLength(height, width);
  }

  getArea(): number {
    const rectanglePerimetr = this.width * this.height;

    return roundNumber(rectanglePerimetr);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
