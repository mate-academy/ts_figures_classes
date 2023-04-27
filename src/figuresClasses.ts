type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color
  getArea(): number
}

export class Triangle implements Figure {
  shape: Shape.Triangle;

  sideA: number;

  sideB: number;

  sideC: number;

  color: Color;

  constructor(
    color: Color,
    a: number,
    b: number,
    c: number,
  ) {
    this.shape = Shape.Triangle;
    this.color = color;
    this.sideA = a;
    this.sideB = b;
    this.sideC = c;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All properties should be positive!');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Not a triangle!');
    }
  }

  getArea(): number {
    const perimeter = (this.sideA + this.sideB + this.sideC);

    return Math.floor(
      Math.sqrt(
        perimeter / 2
        * (perimeter / 2 - this.sideA)
        * (perimeter / 2 - this.sideB)
        * (perimeter / 2 - this.sideC),
      ) * 100,
    ) / 100;
    // Heron's formula
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

  width: number;

  height: number;

  color: Color;

  constructor(
    color: Color,
    width: number,
    height: number,
  ) {
    this.shape = Shape.Rectangle;
    this.color = color;
    this.width = width;
    this.height = height;

    if (width <= 0 || height <= 0) {
      throw new Error('All properties should be positive!');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
