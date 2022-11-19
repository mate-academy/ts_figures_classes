enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

function roundToTwoDigits(number: number): number {
  return Math.round(number * 100) / 100;
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('any triangle`s side should be larger than zero');
    }

    const longestSide = Math.max(a, b, c);

    if (longestSide >= (a + b + c) - longestSide) {
      throw new Error('longest side should be larger than'
      + 'sum of the other sides');
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(halfPerimeter * (halfPerimeter - this.a)
     * (halfPerimeter - this.b)
     * (halfPerimeter - this.c));

    return roundToTwoDigits(square);
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius should be larger than zero');
    }
  }

  getArea(): number {
    const circleS = Math.PI * this.radius ** 2;

    return Math.floor(circleS * 100) / 100;
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
      throw new Error('Both rectangle sides should be largest than zero');
    }
  }

  getArea(): number {
    const rectangleS = this.width * this.height;

    return roundToTwoDigits(rectangleS);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
