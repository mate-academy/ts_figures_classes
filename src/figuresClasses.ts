// import { type } from "os";

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function errors(...args: number[]): boolean {
  return args.some((arg: number) => arg <= 0);
}

function rounder(num: number): number {
  return Math.floor(num * 100) / 100;
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (errors(a, b, c)) {
      throw new Error('side cannot be less than or equal to 0');
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const semiPerimetr: number = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiPerimetr
      * (semiPerimetr - this.a)
      * (semiPerimetr - this.b)
      * (semiPerimetr - this.c),
    );

    return rounder(area);
  }
}

export class Circle {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (errors(radius)) {
      throw new Error('radius cannot be less than or equal to 0');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return rounder(area);
  }
}

export class Rectangle {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width : number,
    public height : number,
  ) {
    if (errors(width, height)) {
      throw new Error('side cannot be less than or equal to 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return rounder(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
