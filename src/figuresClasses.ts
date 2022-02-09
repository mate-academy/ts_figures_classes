// import { type } from "os";

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

type Color = 'blue' | 'green' | 'red';

export interface Figure {
  shape: Shape
  color: Color
  getArea(): number
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  sides: number[];

  getArea: () => number;

  constructor(public color: Color, ...sides: number[]) {
    this.sides = sides;

    const [a, b, c] = sides;
    let p = a + b + c;

    const errorValue = sides.some((elem) => elem <= 0
        || p - elem <= elem);

    if (errorValue) {
      throw new Error("sides 1, 2 and 3 can't form a triangle");
    }

    this.getArea = (): number => {
      p /= 2;

      const result = ((p - a) * (p - b) * (p - c) * p) ** (1 / 2);

      return Math.round(result * 100) / 100;
    };
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  radius: number;

  getArea: () => number;

  constructor(public color: Color, radius: number) {
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('radius must be greater than 0');
    }

    this.getArea = (): number => {
      const s = (Math.PI * radius * radius);

      return Math.floor(s * 100) / 100;
    };
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  sides: number[];

  getArea: () => number;

  constructor(public color: Color, ...sides: number[]) {
    this.sides = sides;

    const errorValue = [sides[0], sides[1]]
      .some((elem: number) => elem <= 0);

    if (errorValue) {
      throw new Error("sides can't form a rectangle");
    }

    this.getArea = (): number => {
      const [width, height] = sides;
      const s = width * height;

      return Math.round(s * 100) / 100;
    };
  }
}

export function getInfo({ shape, color, getArea }: Figure): string {
  return `A ${color} ${shape} - ${getArea()}`;
}
