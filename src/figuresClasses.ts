type ValidShapes = 'triangle' | 'circle' | 'rectangle';
type ValidColors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: ValidShapes;
  color: ValidColors;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: ValidShapes = 'triangle';

  constructor(
    public color: ValidColors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c];
    const longestSide = Math.max(...sides);
    let sumOfOtherSides = 0;

    for (const side of sides) {
      if (side < longestSide) {
        sumOfOtherSides += side;
      }
    }

    if (a <= 0 || b <= 0 || c <= 0 || sumOfOtherSides <= longestSide) {
      throw new Error('is not valid length!');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const triangleArea = Math.sqrt(
      p * (p - this.a) * (p - this.b) * (p - this.c),
    );

    return Math.floor(triangleArea * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: ValidShapes = 'circle';

  constructor(
    public color: ValidColors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('is not valid length!');
    }
  }

  getArea(): number {
    const circleArea =
      Math.floor(Math.PI * this.radius * this.radius * 100) / 100;

    return circleArea;
  }
}

export class Rectangle implements Figure {
  public shape: ValidShapes = 'rectangle';

  constructor(
    public color: ValidColors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('is not valid length!');
    }
  }

  getArea(): number {
    const rectangleArea = this.width * this.height;

    return rectangleArea;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
