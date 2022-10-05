export enum Shape {
  Triangle = 'triangle',
  Circle= 'circle',
  Rectangle = 'rectangle',
}

export enum Color {
  Red = 'red',
  Blue = 'blue',
  Green = 'green',
}

export interface Figure {
  shape: Shape,
  color: Color,

  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || b <= 0) {
      throw new Error('The side length cannot be less than or equal to 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('The side length cannot be greater'
      + 'than or equal to sum of the others');
    }

    this.shape = Shape.Triangle;
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return +((s * (s - this.a) * (s - this.b)
      * (s - this.c)) ** (1 / 2)).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius cannot be less than or equal to 0');
    }

    this.shape = Shape.Circle;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('The side length cannot'
        + 'be less than or equal to 0');
    }

    this.shape = Shape.Rectangle;
  }

  getArea(): number {
    return +Math.floor(this.a * this.b).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
