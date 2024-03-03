export type Shape = `triangle` | `circle` | `rectangle`;
export type Color = `red` | `green` | `blue`;

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function roundDown(number: number): number {
  return Math.floor(number * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = `triangle`;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides of the triangle must be greater than 0.');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('The sum of any 2 sides must be greater than 3rd side.');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiP = (a + b + c) / 2;
    const area = Math.sqrt(semiP * (semiP - a) * (semiP - b) * (semiP - c));

    return roundDown(area);
  }
}

export class Circle implements Figure {
  shape: Shape = `circle`;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0.');
    }
  }

  getArea(): number {
    const { radius } = this;
    const area = Math.PI * radius * radius;

    return roundDown(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = `rectangle`;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides of the rectangle must be greater than 0.');
    }
  }

  getArea(): number {
    const { width, height } = this;
    const area = width * height;

    return roundDown(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
