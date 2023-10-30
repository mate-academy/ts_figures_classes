export enum Shape {
  TRIANGLE = 'triangle',
  CIRCLE = 'circle',
  RECTANGLE = 'rectangle'
}

export interface Figure {
  shape: Shape,
  color: string,
  getArea(): number,
}

export function roundedDownToHundredths(value: number): number {
  return Math.floor(value * 100) / 100;
}

export class Triangle implements Figure {
  shape = Shape.TRIANGLE;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('The sides of the triangle are not correctly specified');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return roundedDownToHundredths(area);
  }
}

export class Circle implements Figure {
  shape = Shape.CIRCLE;

  constructor(public color: string, public radius: number) {
    if (this.radius <= 0) {
      throw new Error('The radius is incorrect');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return roundedDownToHundredths(area);
  }
}

export class Rectangle implements Figure {
  shape = Shape.RECTANGLE;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('width or height is incorrectly passed');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundedDownToHundredths(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
