type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

function checkOnError(errorMessage: string, ...args: number[]): void {
  if (args.some((arg: number) => arg <= 0)) {
    throw new Error(errorMessage);
  }
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        `Triangle sides ${a}, ${b} and ${c} must be greater than zero`,
      );
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        `The provided dimensions ${a}, ${b} and ${c} can't form a triangle`,
      );
    }
  }

  public getArea = (): number => {
    const semiPerimeter: number = (this.a + this.b + this.c) / 2;
    const triangleArea: number = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.a) *
        (semiPerimeter - this.b) *
        (semiPerimeter - this.c),
    );

    return Math.round(triangleArea * 100) / 100;
  };
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Circle radius must be greater than zero`);
    }
  }

  public getArea = (): number => {
    const circleArea = Math.PI * Math.pow(this.radius, 2);

    return Math.trunc(circleArea * 100) / 100;
  };
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape = 'rectangle',
  ) {
    checkOnError(
      `Rectangle width and height must be greater than zero`,
      width,
      height,
    );
  }

  public getArea = (): number => {
    const rectangleArea = this.width * this.height;

    return Math.round(rectangleArea * 100) / 100;
  };
}

export function getInfo({ shape, color, getArea }: Figure): string {
  return `A ${color} ${shape} - ${getArea()}`;
}
