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

abstract class BaseFigure implements Figure {
  abstract shape: Shape;

  abstract color: Color;

  abstract getArea(): number;

  protected getCorrectLength(...sides: number[]): void {
    if (Math.min(...sides) <= 0) {
      throw new Error(
        `Side length of figure ${this.shape} should be a positive number!`,
      );
    }
  }

  protected getTriangleSides([sideA, sideB, sideC]:number[]): void {
    if (sideC >= sideA + sideB) {
      throw new Error(`Impossible to build a ${this.shape} with these sides`);
    }
  }
}

function roundNumbers(expression: number): number {
  return Math.floor((expression) * 100) / 100;
}

export class Triangle extends BaseFigure {
  readonly shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    super();

    this.getCorrectLength(a, b, c);

    const [
      sideA,
      sideB,
      sideC,
    ]: number[] = [a, b, c].sort((prev, next) => prev - next);

    this.getTriangleSides([sideA, sideB, sideC]);
  }

  getArea():number {
    const semiperimeter = (this.a + this.c + this.b) / 2;

    const area = Math.sqrt(
      semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c),
    );

    return roundNumbers(area);
  }
}

export class Circle extends BaseFigure {
  readonly shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    super();

    if (radius < 0) {
      throw new Error('Radius has to be positive number!');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return roundNumbers(area);
  }
}

export class Rectangle extends BaseFigure {
  readonly shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    super();

    this.getCorrectLength(width, height);
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
