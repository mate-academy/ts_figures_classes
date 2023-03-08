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

function round(number: number): number {
  return Math.floor(number * 100) / 100;
}

function isInvalid(...numbers: number[]): boolean {
  return numbers.some((number): boolean => {
    return number <= 0;
  });
}

export interface Figure {
  shape: Shape,
  color: Color,

  getArea: () => number,
}

export class Triangle implements Figure {
  readonly shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      isInvalid(a, b, c)
      || a >= b + c
      || b >= a + c
      || c >= a + b
    ) {
      throw new Error('Impossible triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiPerimeter = (a + b + c) / 2;
    const area = Math.sqrt(semiPerimeter
      * (semiPerimeter - a)
      * (semiPerimeter - b)
      * (semiPerimeter - c));
    const roundedArea = round(area);

    return roundedArea;
  }
}

export class Circle implements Figure {
  readonly shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (isInvalid(radius)) {
      throw new Error('Impossible circle');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);
    const roundedArea = round(area);

    return roundedArea;
  }
}

export class Rectangle implements Figure {
  readonly shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (isInvalid(width, height)) {
      throw new Error('Impossible rectangle');
    }
  }

  getArea(): number {
    const area = this.width * this.height;
    const roundedArea = round(area);

    return roundedArea;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
