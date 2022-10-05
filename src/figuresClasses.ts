// import { CpuInfo } from "os";

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea():number,
}

export class Triangle {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    private a:number,
    private b:number,
    private c:number,
  ) {
    if (this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.c + this.a <= this.b) {
      throw new Error('This is not a triangle');
    }
  }

  getArea():number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c));

    return +square.toFixed(2);
  }
}

export class Circle {
  shape: Shape = Shape.Circle;

  constructor(public color: Color, private radius: number) {
    if (this.radius <= 0) {
      throw new Error('this is not a circle');
    }
  }

  getArea():number {
    const square = Math.PI * this.radius ** 2;

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('this is not a Rectangle');
    }
  }

  getArea():number {
    const square = this.width * this.height;

    return +square.toFixed(2);
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
