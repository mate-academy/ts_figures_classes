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
}

export class Triangle extends BaseFigure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    super();

    if (Math.min(a, b, c) <= 0) {
      throw new Error('Side length should be a positive number!');
    }

    const [
      sideA,
      sideB,
      sideC,
    ]: number[] = [a, b, c].sort((prev, next) => prev - next);

    if (sideC >= sideA + sideB) {
      throw new Error('Impossible to build a triangle with these sides');
    }
  }

  getArea():number {
    const semiperimeter = (this.a + this.c + this.b) / 2;

    const area = Math.sqrt(
      semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c),
    );

    return +area.toFixed(2);
  }
}

export class Circle extends BaseFigure {
  shape = Shape.Circle;

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

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle extends BaseFigure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    super();

    if (Math.min(width, height) <= 0) {
      throw new Error('Side length should be a positive number!');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
