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

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

const errorMessage: string = 'Invalid dimensions for the figure';

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const validationArr: number[] = [this.a, this.b, this.c];
    const biggestNumber: number = Math.max(...validationArr);
    const smallerNumbersSum: number =
      validationArr.reduce((acc, num) => acc + num, 0) - biggestNumber;

    const isTriangleValid: boolean =
      smallerNumbersSum > biggestNumber &&
      validationArr.every((num) => num > 0);

    if (!isTriangleValid) {
      throw new Error(errorMessage);
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    const area: number = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error(errorMessage);
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error(errorMessage);
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
