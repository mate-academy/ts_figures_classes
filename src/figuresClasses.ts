export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: Shape = 'triangle';

  constructor(
    public readonly color: Color,
    private readonly a: number,
    private readonly b: number,
    private readonly c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The side length is less than or equal to zero.');
    }

    const maxSide = Math.max(a, b, c);
    const sumLengthTwoSides = a + b + c - maxSide;

    if (maxSide >= sumLengthTwoSides) {
      throw new Error('Length of the longer side: invalid value');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  readonly shape: Shape = 'circle';

  constructor(
    public readonly color: Color,
    private readonly radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('The radius is equal to zero.');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape: Shape = 'rectangle';

  constructor(
    public readonly color: Color,
    private readonly width: number,
    private readonly hight: number,
  ) {
    if (this.width <= 0 || this.hight <= 0) {
      throw new Error('The side length is less than or equal to zero.');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.hight * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const calcArea = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${calcArea}`;
}
