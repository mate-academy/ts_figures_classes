enum Shape {
  triangle,
  circle,
  rectangle,
}

enum Color {
  red,
  green,
  blue,
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = Shape.triangle;

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public a: number,
    public b: number,
    public c: number,
    public color: Color,
  ) {
    const valuesSorted: number[] = [this.a, this.b, this.c].sort();

    if (
      this.a <= 0 ||
      this.b <= 0 ||
      this.c <= 0 ||
      valuesSorted[2] >= valuesSorted[1] + valuesSorted[0]
    ) {
      throw new Error('All parameters must be greater than zero');
    }
  }

  getArea(): number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      halfPerimeter *
        (halfPerimeter - this.a) *
        (halfPerimeter - this.b) *
        (halfPerimeter - this.c),
    );

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape = Shape.circle;

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public radius: number,
    public color: Color,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }
  }

  getArea(): number {
    return Math.round(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape = Shape.rectangle;

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public width: number,
    public height: number,
    public color: Color,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width and height parameters must be greater than zero');
    }
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return typeof figure;
}
