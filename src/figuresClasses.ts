export enum Shape {
  Triangle = "triangle",
  Circle = "circle",
  Rectangle = "rectangle",
}

export type Color = "red" | "green" | "blue";

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function handleRound(num: number): number {
  return Math.floor(num * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error("Number must be positive");
    }

    if (a >= b + c || a >= a + c || c >= a + b) {
      throw new Error("Invalid triangle sides");
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = (a + b + c) / 2;
    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return handleRound(area);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error("Radius must be positive");
    }
  }

  getArea(): number {
    const { radius } = this;
    const area = Math.PI * radius * radius;

    return handleRound(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error("Width and height must be positive");
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
