type Color = `red` | `green` | `blue`;
type Shape = `triangle` | `circle` | `rectangle`;

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Value was not received or less than 0');
    }

    const sortedTypes = [a, b, c].sort((arg1, arg2) => arg1 - arg2);
    const sumSmallerSides = sortedTypes[0] + sortedTypes[1];
    const biggestSide = sortedTypes[2];
    const isTriangle = sumSmallerSides > biggestSide;

    if (!isTriangle) {
      throw new Error('Incorrect value sides for triangle');
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;

    return parseFloat(
      Math.sqrt(
        semiperimeter *
          (semiperimeter - this.a) *
          (semiperimeter - this.b) *
          (semiperimeter - this.c),
      ).toFixed(2),
    );
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Value was not received or less than 0');
    }
  }

  getArea(): number {
    const calculateAreaCircle = Math.PI * this.radius ** 2;

    return Math.floor(calculateAreaCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Value was not received or less than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
