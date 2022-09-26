enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

type Color = 'red' | 'green' | 'blue';

function getRoundedNumber(number: number): number {
  return Math.floor(number * 100) / 100;
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    if (sideA <= 0 || sideB <= 0 || sideC <= 0) {
      throw new Error('Your triangle must have sides with positive number');
    }

    const longestSide = Math.max(sideA, sideB, sideC);
    const otherSides = sideA + sideB + sideC - longestSide;

    if (otherSides <= longestSide) {
      throw new Error('The figure with such sides is not a tringle');
    }
  }

  getArea(): number {
    const halfOfPerimeter = (this.sideA + this.sideB + this.sideC) / 2;
    const area = Math.sqrt(halfOfPerimeter * (halfOfPerimeter - this.sideA)
      * (halfOfPerimeter - this.sideB) * (halfOfPerimeter - this.sideC));

    return getRoundedNumber(area);
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Your circle must have radius with positive number');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return getRoundedNumber(area);
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
      throw new Error('Your rectangle must have positive width and height');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return getRoundedNumber(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
