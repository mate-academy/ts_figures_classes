export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape.Triangle;

  sides: number[];

  constructor(
    color: Color,
    a: number,
    b: number,
    c: number,
  ) {
    this.shape = Shape.Triangle;
    this.color = color;
    this.sides = [a, b, c];

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All properties should be positive!');
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error(`Triangle with sides ${a}, ${b}, and ${c} can't exist`);
    }
  }

  getArea(): number {
    const [a, b, c] = [...this.sides];
    const perimeter = (a + b + c) / 2;

    return Math.floor(
      Math.sqrt(
        perimeter
        * (perimeter - a)
        * (perimeter - b)
        * (perimeter - c),
      ) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape.Circle;

  radius: number;

  color: Color;

  constructor(color: Color, radius: number) {
    this.shape = Shape.Circle;
    this.radius = radius;
    this.color = color;

    if (radius <= 0) {
      throw new Error('Radius should be positive!');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape.Rectangle;

  sides: number[];

  color: Color;

  constructor(
    color: Shape.Rectangle,
    width: number,
    height: number,
  ) {
    this.shape = Shape.Rectangle;
    this.color = color;
    this.sides = [width, height];

    if (width <= 0 || height <= 0) {
      throw new Error('All properties should be positive!');
    }
  }

  getArea(): number {
    const [width, height] = [...this.sides];

    return Math.floor(width * height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
