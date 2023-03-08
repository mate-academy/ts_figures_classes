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

function checkLength(...args: number[]): void {
  if (args.some((side) => side <= 0)) {
    throw new Error('Please, enter valid values');
  }
}

function floorArea(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Please, enter valid values');
    }

    checkLength(a, b, c);
  }

  getArea(): number {
    const { a, b, c } = this;

    const semiperimeter: number = (a + b + c) / 2;

    const area = Math.sqrt(semiperimeter
      * (semiperimeter - a)
      * (semiperimeter - b)
      * (semiperimeter - c));

    return floorArea(area);
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    checkLength(radius);
  }

  getArea(): number {
    const { radius } = this;

    const area: number = Math.PI * radius ** 2;

    return floorArea(area);
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    checkLength(width, height);
  }

  getArea(): number {
    const { width, height } = this;

    const area = width * height;

    return floorArea(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
