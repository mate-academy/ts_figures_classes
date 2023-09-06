enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: () => number,
}

function toFixedArea(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle {
  public readonly shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const maxSide = Math.max(this.a, this.b, this.c);

    if (this.a <= 0
      || this.b <= 0
      || this.c <= 0
      || maxSide >= this.a + this.b + this.c - maxSide) {
      throw new Error(
        'Length of a, b, c <= 0 or length of max side >= than sum of two other',
      );
    }
  }

  getArea(): number {
    const { a, b, c } = this;

    const semiperimeter: number = (a + b + c) / 2;

    const area = Math.sqrt(
      semiperimeter
      * (semiperimeter - a)
      * (semiperimeter - b)
      * (semiperimeter - c),
    );

    return toFixedArea(area);
  }
}

export class Circle {
  public readonly shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius <= 0');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return toFixedArea(area);
  }
}

export class Rectangle {
  public readonly shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width or height <= 0');
    }
  }

  getArea(): number {
    const { width, height } = this;
    const area = width * height;

    return toFixedArea(area);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
