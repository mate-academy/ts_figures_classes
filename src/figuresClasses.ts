enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

// export enum Color {
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
      throw new Error('The sides values must be greater than 0');
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
      throw new Error('Radius must be greater than 0');
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
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Height and width must be greater than 0');
    }
  }

  getArea(): number {
    return Math.round((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
