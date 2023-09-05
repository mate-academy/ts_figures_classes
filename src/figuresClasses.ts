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

function isTheBigestSide(a: number, b: number, c: number): boolean {
  return a + b <= c || b + c <= a || c + a <= b;
}

function roundToHundredths(value: number):number {
  return Math.round(value * 100) / 100;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    const isBigger = isTheBigestSide(this.a, this.b, this.c);

    if (this.a <= 0 || this.b <= 0 || this.c <= 0 || isBigger) {
      throw new Error('The longest side is greater than a sum of two others');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const triangleArea = Math.sqrt(semiPerimeter * (semiPerimeter - this.a)
    * (semiPerimeter - this.b) * (semiPerimeter - this.c));

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
    const circleArea = this.radius * this.radius * Math.PI;

    return Math.floor(circleArea * 100) / 100;
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
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
