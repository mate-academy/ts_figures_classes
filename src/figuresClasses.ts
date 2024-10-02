type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const theLongestSide = Math.max(a, b, c);
    const sumOfThoSmallest = a + b + c - theLongestSide;

    if (a <= 0 || b <= 0 || c <= 0 || sumOfThoSmallest <= theLongestSide) {
      throw new Error(
        'Each side ought be >0. And the longest ought be less than others sum',
      );
    }
  }

  getArea(): number {
    const semiPerimeter: number = 0.5 * (this.a + this.b + this.c);

    const triangleArea = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.a) *
        (semiPerimeter - this.b) *
        (semiPerimeter - this.c),
    );

    return Math.trunc(triangleArea * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius should be bigger than 0');
    }
  }

  getArea(): number {
    const circleArea = Math.PI * Math.pow(this.radius, 2);

    return Math.trunc(circleArea * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Heght and width should be bigger than 0');
    }
  }

  getArea(): number {
    return Math.trunc(this.height * this.width * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
