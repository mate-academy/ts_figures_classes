// import { error } from "console";

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
    public sideC: number,
  ) {
    this.validateParameters();
  }

  getArea(): number {
    const s = (this.sideA + this.sideB + this.sideC) / 2;
    const area = Math.sqrt(s * (s - this.sideA)
    * (s - this.sideB) * (s - this.sideC));

    return Math.floor(area * 100) / 100;
  }

  validateParameters(): void {
    const sides: number[] = [this.sideA, this.sideB, this.sideC];

    if (sides.some((side): boolean => side <= 0)) {
      throw new Error('All sides have to be greater than zero');
    }

    sides.sort((first: number, second: number) => second - first);

    const [a, b, c] = sides;

    if (a >= (b + c)) {
      throw new Error(`sides ${this.sideA},
        ${this.sideB} and ${this.sideC} can't form a triangle`);
    }
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.validateParameters();
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }

  validateParameters(): void {
    if (this.radius <= 0) {
      throw new Error(`Radius ${this.radius} can't, form a cirlce`);
    }
  }
}

export class Rectangle {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.validateParameters();
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }

  validateParameters(): void {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error(`Sides ${this.width},
        ${this.height} can't form a Rectangle`);
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
