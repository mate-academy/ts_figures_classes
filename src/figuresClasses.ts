export enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

function roundDownToHundredths(n: number): number {
  return Math.floor(n * 100) / 100;
}

export class Triangle implements Figure {
  readonly shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const max = Math.max(a, b, c);

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        `All sides must be positive numbers. Received a=${a}, b=${b}, c=${c}`,
      );
    }

    if (max >= a + b + c - max) {
      throw new Error(`Sides ${a}, ${b}, ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return roundDownToHundredths(area);
  }
}

export class Circle implements Figure {
  readonly shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Radius must be > 0. Received ${radius}`);
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return roundDownToHundredths(area);
  }
}

export class Rectangle implements Figure {
  readonly shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        `Width and height must be > 0. Recieved width=${width}, heigth=${height}`,
      );
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundDownToHundredths(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
