type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  color: Color;

  sides: number[];

  constructor(
    color: Color,
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0
      || b <= 0
      || c <= 0) {
      throw new Error('Length of each side should be greater than 0');
    }

    if (a + b <= c
      || a + c <= b
      || b + c <= a) {
      throw new Error('Entered sides cant from a triangle');
    }

    this.color = color;
    this.sides = [a, b, c];
  }

  getArea(): number {
    const [a, b, c] = this.sides;
    const s = (a + b + c) / 2;

    return Number((Math.sqrt(s * (s - a) * (s - b) * (s - c))).toFixed(2));
  }
}

export class Circle {
  shape: Shape = 'circle';

  color: Color;

  radius: number;

  constructor(color: Color, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius should be greater than 0');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    return Number((Math.PI * (this.radius ** 2)).toFixed(2));
  }
}

export class Rectangle {
  shape: Shape = 'rectangle';

  color: Color;

  width: number;

  height: number;

  constructor(
    color: Color,
    width: number,
    height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height should be greater than 0');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  const figureArea = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${figureArea}`;
}
