enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

function roundedDown(area: number): number {
  return Math.floor(area * 100) / 100;
}

function checkFigure(...nums: number[]): boolean {
  return nums.some((num: number) => num <= 0);
}

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (checkFigure(a, b, c)) {
      throw new Error('Incorrect triangles sides');
    }

    const maxValue = Math.max(a, b, c);

    if (maxValue >= (a + b + c - maxValue)) {
      throw new Error('It is not a triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const sideSemiLength = (a + b + c) / 2;
    const area = Math.sqrt(sideSemiLength
      * (sideSemiLength - a)
      * (sideSemiLength - b)
      * (sideSemiLength - c));

    return roundedDown(area);
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (checkFigure(radius)) {
      throw new Error('Incorrect circles radius');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return roundedDown(area);
  }
}

export class Rectangle {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (checkFigure(width, height)) {
      throw new Error('Incorrect values sides');
    }
  }

  getArea(): number {
    const { width, height } = this;

    return roundedDown(width * height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
