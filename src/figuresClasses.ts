export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export function roundToHundredths(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side is not valid');
    }

    if ((a + b) <= c || (a + c) <= b || (c + b) <= a) {
      throw new Error('Triangle doesn`t exist');
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const semiperimeter: number = (a + b + c) / 2;

    const area: number = Math.sqrt(semiperimeter
    * (semiperimeter - a)
    * (semiperimeter - b)
    * (semiperimeter - c));

    return roundToHundredths(area);
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius : number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius is not valid');
    }
  }

  getArea(): number {
    const { radius } = this;
    const area: number = Math.PI * radius ** 2;

    return roundToHundredths(area);
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width : number,
    public height : number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Side is not valid');
    }
  }

  getArea(): number {
    const { width, height } = this;
    const area: number = width * height;

    return roundToHundredths(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
