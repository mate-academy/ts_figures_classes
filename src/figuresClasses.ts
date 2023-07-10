enum Shapes {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes,
  color: Colors,
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shapes.triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    // eslint-disable-next-line max-len
    if (a + b <= c || a + c <= b || b + c <= a || a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        `This triangle does not exist.
        Enter correct length of figure's sides
        (bigger than 0 and sum of two sides should be less than third side)`,
      );
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(semiperimeter * (semiperimeter - this.a)
    * (semiperimeter - this.b) * (semiperimeter - this.c));
    // toFixed(2) is rounding method so for strict comprasion I used that

    return Number(area.toFixed(3).slice(0, -1));
  }
}

export class Circle implements Figure {
  shape = Shapes.circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(
        'This circle does not exist. Enter correct radius(bigger than 0)',
      );
    }
  }

  getArea(): number {
    // toFixed(2) is rounding method so for strict comprasion I used that
    return Number((Math.PI * this.radius ** 2).toFixed(3).slice(0, -1));
  }
}

export class Rectangle implements Figure {
  shape = Shapes.rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        `This rectangle doesn't exist.
        Enter correct length of figure's sides(bigger than 0)`,
      );
    }
  }

  getArea(): number {
    // toFixed(2) is rounding method so for strict comprasion I used that
    return Number((this.height * this.width).toFixed(3).slice(0, -1));
  }
}

export function getInfo(figure: Figure): string {
  const output = figure !== null
    ? `A ${figure.color} ${figure.shape} - ${figure.getArea()}`
    : 'Incorrect data';

  return output;
}
