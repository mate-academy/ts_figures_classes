type Color = 'red' | 'green' | 'blue';

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

function errorChecking(...args: number[]): void {
  if (args.some((argument) => argument <= 0)) {
    throw new Error('Values must be greater than zero');
  }
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    errorChecking(a, b, c);

    if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
      throw new Error('The hypotenuse is shorter than the sum of the legs');
    }
  }

  getArea(): number {
    const halfOfPerimeter: number = (this.a + this.b + this.c) / 2;

    const triangleArea = Math.sqrt(
      halfOfPerimeter
      * (halfOfPerimeter - this.a)
      * (halfOfPerimeter - this.b)
      * (halfOfPerimeter - this.c),
    );

    return Math.floor(triangleArea * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    errorChecking(radius);
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
    errorChecking(width, height);
  }

  getArea():number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
