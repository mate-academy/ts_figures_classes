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

  color: Color;

  constructor(
    color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    this.shape = Shape.Triangle;
    this.color = color;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All properties should be positive!');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Not a triangle!');
    }
  }

  getArea(): number {
    const perimeter = (this.a + this.b + this.c);

    return Math.floor(
      Math.sqrt(
        perimeter / 2
        * (perimeter / 2 - this.a)
        * (perimeter / 2 - this.b)
        * (perimeter / 2 - this.c),
      ) * 100,
    ) / 100;
    // Heron's formula
  }
}

export class Circle implements Figure {
  shape: Shape.Circle;

  color: Color;

  constructor(color: Color, private radius: number) {
    this.shape = Shape.Circle;
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

  color: Color;

  constructor(
    color: Color,
    private width: number,
    private height: number,
  ) {
    this.shape = Shape.Rectangle;
    this.color = color;

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
