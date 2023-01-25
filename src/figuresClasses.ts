enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red'| 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.entriesValidation();
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(s * 100) / 100;
  }

  private entriesValidation(): void {
    const sides: number[] = [this.a, this.b, this.c];
    const longestSide: number = Math.max(...sides);
    const sumOfSides: number = sides.reduce((sum, side) => sum + side);

    const isTriangle: boolean = longestSide < sumOfSides - longestSide;
    const isCorrectSides: boolean = sides.every((side) => side > 0);

    if (!isTriangle) {
      throw new Error('The longest side of a triangle cannot be '
        + 'greater than or equal to the sum of the other two.');
    }

    if (!isCorrectSides) {
      throw new Error('Side length cannot be less than or equal to 0.');
    }
  }
}

export class Circle {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.entriesValidation();
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }

  private entriesValidation(): void {
    if (this.radius <= 0) {
      throw new Error('Circle radius cannot be less than or equal to 0.');
    }
  }
}

export class Rectangle {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    this.entriesValidation();
  }

  getArea(): number {
    return Math.floor((this.a * this.b) * 100) / 100;
  }

  private entriesValidation(): void {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('Rectangle side cannot be less than or equal to 0.');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
