type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  color: Color,
  shape: Shape,

  getArea(): number,
}

function checkTriangleSidesLength(
  sideA: number,
  sideB: number,
  sideC: number,
): boolean {
  return sideA + sideB <= sideC
    || sideB + sideC <= sideA
    || sideC + sideA <= sideB;
}

function roundToHundredths(value: number):number {
  return Math.floor(value * 100) / 100;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    private sideA: number,
    private sideB: number,
    private sideC: number,
  ) {
    const isSidesLengthIncorrect = checkTriangleSidesLength(
      this.sideA, this.sideB, this.sideC,
    );

    if (this.sideA <= 0 || this.sideB <= 0 || this.sideC <= 0) {
      throw new Error('Sides must be > 0');
    }

    if (isSidesLengthIncorrect) {
      throw new Error('The longest side is greater than a sum of two others');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.sideA + this.sideB + this.sideC) / 2;
    const triangleArea = Math.sqrt(
      semiPerimeter
      * (semiPerimeter - this.sideA)
      * (semiPerimeter - this.sideB)
      * (semiPerimeter - this.sideC),
    );

    return roundToHundredths(triangleArea);
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius cannot be a negative number');
    }
  }

  getArea(): number {
    const circleArea = Math.PI * this.radius ** 2;

    return roundToHundredths(circleArea);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width or height cannot be a negative number');
    }
  }

  getArea(): number {
    const rectangleArea = this.width * this.height;

    return roundToHundredths(rectangleArea);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
