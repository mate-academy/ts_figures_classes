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

function roundArea(area: number): number {
  return Math.floor(100 * area) / 100;
}

function isPositiveNumber(...numbers: number[]): boolean {
  return numbers.some((num: number) => num <= 0);
}

export interface Figure {
  color: Color;
  shape: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (isPositiveNumber(a, b, c)) {
      throw new Error('Sides are not valid (side <= 0)');
    }

    const sides = [this.a, this.b, this.c];

    let longestSide: number = sides[0];

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i < sides.length; i++) {
      if (sides[i] > longestSide) {
        longestSide = sides[i];
      }

      if (i === 2) {
        sides.splice(sides.indexOf(longestSide), 1);
      }
    }

    if (longestSide >= sides.reduce((
      sum: number,
      currentSide:number,
    ) => sum + currentSide)) {
      throw new Error(
        'The longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiPerimeter
    * (semiPerimeter - this.a)
    * (semiPerimeter - this.b)
    * (semiPerimeter - this.c));

    return roundArea(area);
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (isPositiveNumber(radius)) {
      throw new Error('Radius is not valid!');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return roundArea(area);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (isPositiveNumber(width, height)) {
      throw new Error('Sides are not positive!');
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    return roundArea(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
