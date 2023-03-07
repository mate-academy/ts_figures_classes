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
  shape: Shape,
  color: Color,

  getArea: () => number,
}

export class Triangle implements Figure {
  readonly shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      a >= b + c
      || b >= a + c
      || c >= a + b
      || a <= 0
      || b <= 0
      || c <= 0
    ) {
      throw new Error('Impossible triangle');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const semi = (this.a + this.b + this.c) / 2;
    const { a, b, c } = this;
    const area = Math.sqrt(semi * (semi - a) * (semi - b) * (semi - c));
    const roundedArea = Math.floor(area * 100) / 100;

    return roundedArea;
  }
}

export class Circle implements Figure {
  readonly shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Impossible circle');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);
    const roundedArea = Math.floor(area * 100) / 100;

    return roundedArea;
  }
}

export class Rectangle implements Figure {
  readonly shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Impossible rectangle');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
