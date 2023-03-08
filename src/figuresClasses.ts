export enum Colors {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export function isLengthOk(...sides: number[]): boolean {
  sides.sort((sideOne: number, sideTwo: number) => sideTwo - sideOne);

  return sides[0] < sides[1] + sides[2];
}

export interface Figure {
  shape: Shapes;
  color: Colors;

  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = Shapes.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (Math.min(a, b, c) <= 0) {
      throw new Error('Wrong length of the triangle sides');
    }

    if (!isLengthOk(a, b, c)) {
      throw new Error('Impossible to build triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiperimeter = (a + b + c) / 2;

    const area = Math.sqrt(
      semiperimeter
        * (semiperimeter - a)
        * (semiperimeter - b)
        * (semiperimeter - c),
    );

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  readonly shape = Shapes.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Wrong length of the radius');
    }
  }

  getArea(): number {
    const { radius } = this;

    const area = Math.PI * radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape = Shapes.Rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (Math.min(width, height) <= 0) {
      throw new Error('Wrong length of sides of rectangle');
    }
  }

  getArea(): number {
    const { width, height } = this;

    return +(width * height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
