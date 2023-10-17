enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
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
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c].sort(
      (length1: number, length2: number) => length1 - length2,
    );

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Negative length not allowed');
    }

    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error(
        `Sides ${sides[0]}, ${sides[1]} and ${sides[2]} can't form a triangle`,
      );
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiperimeter = (a + b + c) / 2;
    const area = Math.sqrt(
      semiperimeter
        * (semiperimeter - a)
        * (semiperimeter - b)
        * (semiperimeter - c),
    ).toFixed(2);

    return +area;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('Negative radius not allowed');
    }
  }

  getArea(): number {
    const area = Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;

    return +area;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Negative length not allowed');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
