function roundNumber(value: number): number {
  return Math.floor(value * 100) / 100;
}

function heronFormula(a: number, b: number, c: number): number {
  const s: number = (a + b + c) / 2;

  return roundNumber(Math.sqrt(s * (s - a) * (s - b) * (s - c)));
}

const error = {
  valueError: 'Value cant be zero or less',
  triangleError: 'Side value cant be more than sum of two other sides',
};

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
  color: Color,
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public side1: number,
    public side2: number,
    public side3: number,
  ) {
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
      throw new Error(error.valueError);
    }

    if (side1 + side2 <= side3
      || side1 + side3 <= side2
      || side2 + side3 <= side1
    ) {
      throw new Error(error.triangleError);
    }
  }

  getArea(): number {
    return heronFormula(this.side1, this.side2, this.side3);
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(error.valueError);
    }
  }

  getArea(): number {
    return roundNumber(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(error.valueError);
    }
  }

  getArea(): number {
    return roundNumber(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
