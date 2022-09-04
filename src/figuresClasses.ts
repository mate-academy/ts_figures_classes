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

function validates(...args: number[]): boolean {
  return args.some((param : number) => param <= 0);
}

export class Triangle {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public side1: number,
    public side2: number,
    public side3: number,
  ) {
    if (validates(side1, side2, side3)) {
      throw new Error('Invalid value');
    }

    if ((side1 + side2) <= side3
    || (side1 + side3) <= side2
    || (side2 + side3) <= side1) {
      throw new Error('It is not a triangle');
    }
  }

  getArea(): number {
    const semiPerimeter: number = (this.side1 + this.side2 + this.side3) / 2;

    return Math.floor(Math.sqrt(semiPerimeter
      * (semiPerimeter - this.side1)
      * (semiPerimeter - this.side2)
      * (semiPerimeter - this.side3)) * 100) / 100;
  }
}

export class Circle {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (validates(radius)) {
      throw new Error('Invalid value');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (validates(width, height)) {
      throw new Error('Invalid value');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
