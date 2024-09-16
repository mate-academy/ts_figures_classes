type Color = 'red' | 'blue' | 'green';
type Shape = 'triangle' | 'rectangle' | 'circle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function isValidTriangle(side1: number, side2: number, side3: number): boolean {
  const longestSide = Math.max(side1, side2, side3);
  const sumOfOtherSides = side1 + side2 + side3 - longestSide;

  return longestSide < sumOfOtherSides;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('all sides must be positive numbers');
    }

    if (!isValidTriangle(a, b, c)) {
      throw new Error("sides 1, 2 and 3 can't form a triangle");
    }

    this.color = color;
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - this.a) *
        (semiPerimeter - this.b) *
        (semiPerimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius must be positive numbers');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('all side must be positive numbers');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height);
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
