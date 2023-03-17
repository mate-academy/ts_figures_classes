export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export interface SidesArray {
  get sortedSides(): number[];
}

export function roundToHundredths(number: number): number {
  return Math.floor(number * 100) / 100;
}

export class Triangle implements Figure, SidesArray {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const array = this.sortedSides;
    const validSide = array.filter((side: number) => side);

    if (validSide.length < 3 || array[0] >= array[1] + array[2]) {
      throw new Error(`invalid ${this.shape} side(s)`);
    }
  }

  public get sortedSides(): number[] {
    return [this.a, this.b, this.c]
      .sort((first: number, second: number) => second - first);
  }

  public getArea(): number {
    const sPerimeter = this.sortedSides.reduce((acc, side) => acc + side) / 2;
    const powTriangleArea = this.sortedSides.reduce((acc, side) => {
      return acc * (sPerimeter - side);
    }, sPerimeter);

    return roundToHundredths(Math.sqrt(powTriangleArea));
  }
}

export class Circle {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error(`invalid ${this.shape} radius`);
    }
  }

  getArea(): number {
    return roundToHundredths(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public height: number,
    public width: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error(`invalid ${this.shape} height or withdrow`);
    }
  }

  getArea(): number {
    return roundToHundredths(this.height * this.width);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
