export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;

  color: Color;

  getArea(): number;
}

function checkSides(errorMessage: string, ...sides: number[]): void {
  if (sides.some((side) => side <= 0)) {
    throw new Error(errorMessage);
  }
}

export class Triangle implements Figure {
  shape: Shape;

  color: Color;

  constructor(
    color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    checkSides(
      `The sum of any two sides must be greater than the remaining side.`,
      a,
      b,
      c,
    );

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        `The sum of any two sides must be greater than the remaining side.`,
      );
    }

    this.color = color;
    this.shape = 'triangle';
  }

  getArea(): number {
    const sum = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(
      sum * (sum - this.a) * (sum - this.b) * (sum - this.c),
    ).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape;

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    checkSides(`Circle radius must be greater than zero.`, radius);

    this.shape = `circle`;
    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  color: Color;

  width: number;

  height: number;

  constructor(color: Color, width: number, height: number) {
    checkSides(
      `Rectangle dimensions must be greater than zero.`,
      width,
      height,
    );

    this.shape = `rectangle`;
    this.width = width;
    this.height = height;
    this.color = color;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const figuree: number = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${figuree}`;
}
