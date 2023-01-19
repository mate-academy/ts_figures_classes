enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

const roundtoHundredths = (num: number): number => Math.floor(num * 100) / 100;

export interface Figure {
  shape: Shape;
  color: Color;
  a?: number;
  b?: number;
  c?: number;
  radius?: number;
  width?: number;
  height?: number;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All values have to be more than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('This figure is not a valid triangle');
    }
  }

  getArea(): number {
    const halfPerimetr: number = (this.a + this.b + this.c) * 0.5;
    const squaredPerimetr: number
    = halfPerimetr * (halfPerimetr - this.a)
    * (halfPerimetr - this.b)
    * (halfPerimetr - this.c);
    const perimentr = Math.sqrt(squaredPerimetr);

    return roundtoHundredths(perimentr);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('All values have to be more than 0');
    }
  }

  getArea(): number {
    return roundtoHundredths(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('All values have to be more than 0');
    }
  }

  getArea(): number {
    return roundtoHundredths(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
