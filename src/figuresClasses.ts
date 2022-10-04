enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

// enum Color {
//   red = 'red',
//   green = 'green',
//   blue = 'green',
// }

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides: number[] = [a, b, c];
    const perimeter: number = a + b + c;

    if (sides.some((side: number) => side <= 0)) {
      throw new Error('Some of the sides are equal to or less than 0');
    }

    if (sides.some((side: number) => side >= perimeter - side)) {
      throw new Error('You cannot build a triangle with such sides');
    }
  }

  getArea(): number {
    const perimeter: number = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(
      perimeter
      * (perimeter - this.a)
      * (perimeter - this.b)
      * (perimeter - this.c),
    ) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius is equal to or less than 0');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Some of the sides are equal to or less than 0');
    }
  }

  getArea(): number {
    return Math.round((this.a * this.b) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
