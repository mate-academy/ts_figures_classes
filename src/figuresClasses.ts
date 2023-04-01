function round(number: number): number {
  return Math.floor(number * 100) / 100;
}

function checkIsValid(...numbers: number[]): boolean {
  return numbers.some((number): boolean => {
    return number <= 0;
  });
}

enum Color {
  Blue = 'blue',
  Red = 'red',
  Green = 'green',
}
enum Shape {
  Rectangle = 'rectangle',
  Circle = 'circle',
  Triangle = 'triangle',
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  readonly shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (checkIsValid(a, b, c)
    || a >= b + c
    || b >= a + c
    || c >= b + a
    ) {
      throw new Error('It is not a triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiPerimeter = (a + b + c) / 2;
    const area = Math.sqrt(semiPerimeter
      * (semiPerimeter - a)
      * (semiPerimeter - b)
      * (semiPerimeter - c));
    const roundArea = round(area);

    return roundArea;
  }
}

export class Circle implements Figure {
  readonly shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (checkIsValid(radius)) {
      throw new Error('It is not a circle');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);
    const roundArea = round(area);

    return roundArea;
  }
}

export class Rectangle implements Figure {
  readonly shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (checkIsValid(width, height)) {
      throw new Error('It is not a rectangle');
    }
  }

  getArea(): number {
    const area = this.height * this.width;
    const roundArea = round(area);

    return roundArea;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
