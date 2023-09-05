const ERROR_MESSAGE: string = 'Value cannot be <= 0!';

function circledNumber(number: number): number {
  return Math.floor(number * 100) / 100;
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}
enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}
export interface Figure {
  shape: Shape,
  color: Color,
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
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error(ERROR_MESSAGE);
    }

    if (a + b <= c
      || b + c <= a
      || c + a <= b) {
      throw new Error(
        `sides ${this.a}, ${this.b} and ${this.c} can't form a triangle`,
      );
    }
  }

  getArea(): number {
    const subPerimetr: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      subPerimetr
      * (subPerimetr - this.a)
      * (subPerimetr - this.b)
      * (subPerimetr - this.c),
    );

    return circledNumber(area);
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(ERROR_MESSAGE);
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return circledNumber(area);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(ERROR_MESSAGE);
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return circledNumber(area);
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
