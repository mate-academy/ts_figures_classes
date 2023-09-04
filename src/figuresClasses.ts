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

function roundToTwoDecimals(value: number): number {
  return Math.floor(value * 100) / 100;
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides can\'t be less than or equal to zero.');
    }

    const [longest, medium, shortest] = [a, b, c].sort((m, n) => n - m);

    if (longest >= medium + shortest) {
      throw new Error('Sides a, b and c can\'t form a triangle.');
    }
  }

  public getArea(): number {
    const semiperimeter: number = 0.5 * (this.a + this.b + this.c);

    return roundToTwoDecimals(
      Math.sqrt(
        semiperimeter
        * (semiperimeter - this.a)
        * (semiperimeter - this.b)
        * (semiperimeter - this.c),
      ),
    );
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Ridius can\'t be less than or equal to zero.');
    }
  }

  public getArea(): number {
    return roundToTwoDecimals(Math.PI * (this.radius ** 2));
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
      throw new Error('Width and height can\'t be less than or equal to zero.');
    }
  }

  public getArea(): number {
    return roundToTwoDecimals(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
