enum Shapes {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}
type Color = 'red' | 'green' | 'blue';
export interface Figure {
  shape: Shapes,
  color: Color,
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shapes = Shapes.triangle;

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    const maxSide = Math.max(sideA, sideB, sideC);

    if (sideA <= 0 || sideB <= 0 || sideC <= 0
      || maxSide >= sideA + sideB + sideC - maxSide) {
      throw new Error('Error: entered data is invalid!');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.sideA + this.sideB + this.sideC) / 2;

    return Math.floor(100 * Math.sqrt(semiPerimeter
      * (semiPerimeter - this.sideA)
      * (semiPerimeter - this.sideB)
      * (semiPerimeter - this.sideC))) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shapes = Shapes.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Error: entered data is invalid!');
    }
  }

  getArea(): number {
    const circleArea: number = Math.PI * (this.radius * this.radius);

    return (Math.floor(circleArea * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shapes = Shapes.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width < 0 || this.height < 0) {
      throw new Error('Error: entered data is invalid!');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
