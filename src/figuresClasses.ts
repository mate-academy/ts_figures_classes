type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  color: Color,
  shape: Shape,

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(public color: Color, public a: number, public b: number,
    public c: number) {
    this.shape = 'triangle';

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        `No side can be shorter than 0: a: ${a}, b: ${b}, c: ${c}`,
      );
    }

    const sortedArray
      = [this.a, this.b, this.c].sort((first, secound) => first - secound);
    const max = sortedArray[sortedArray.length - 1];

    switch (max) {
      case c:
        if (a + b <= max) {
          throw new Error(
            `The longest side of a triangle cannot be
             shorter than the sum of the other two:
             a: ${a}, b: ${b}, c: ${c}`,
          );
        }
        break;
      case a:
        if (c + b <= max) {
          throw new Error(
            `The longest side of a triangle cannot be
             shorter than the sum of the other two:
             a: ${a}, b: ${b}, c: ${c}`,
          );
        }
        break;

      default:
        if (a + c <= max) {
          throw new Error(
            `The longest side of a triangle cannot be
             shorter than the sum of the other two:
             a: ${a}, b: ${b}, c: ${c}`,
          );
        }
    }
  }

  getArea(): number {
    const semiPerimeter = ((this.a + this.b + this.c) / 2);

    return Math.floor(Math.sqrt(
      semiPerimeter * (semiPerimeter - this.a)
      * (semiPerimeter - this.b) * (semiPerimeter - this.c),
    ) * 100) / 100;
  }
}

export class Circle {
  shape: Shape;

  constructor(public color: Color,
    public radius: number) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error(
        `The side of the radius cannot be shorter than 0: radius: ${radius}`,
      );
    }
  }

  getArea(): number {
    return Math.floor(((this.radius * this.radius) * Math.PI) * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape;

  constructor(public color: Color,
    public width: number,
    public height: number) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error(
        `No side can be shorter than 0: width: ${width}, height: ${height}`,
      );
    }
  }

  getArea(): number {
    return (this.width * this.height) * 100 / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
