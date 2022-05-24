enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

function roundDown(num: number): number {
  return Math.floor(num * 100) / 100;
}

function throwError(...sides: number[]): void {
  const firstTrue: boolean = sides.some((side: number) => side <= 0);

  if (firstTrue) {
    throw new Error('Invalid data for this figure!');
  }
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    throwError(a, b, c);

    const sortedSides: number[] = [a, b, c]
      .sort((valueA, valueB) => valueA - valueB);

    if (sortedSides[0] + sortedSides[1] <= sortedSides[2]) {
      throw new Error('Invalid sizes for triangle sides!');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiPerimeter = (a + b + c) / 2;
    const area = Math.sqrt(semiPerimeter
      * (semiPerimeter - a)
      * (semiPerimeter - b) * (semiPerimeter - c));

    return roundDown(area);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    throwError(radius);
  }

  getArea(): number {
    const { radius } = this;
    const area = Math.PI * (radius ** 2);

    return roundDown(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    throwError(width, height);
  }

  getArea():number {
    const { width, height } = this;

    return roundDown(width * height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
