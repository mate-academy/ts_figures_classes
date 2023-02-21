enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue'
}
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = Shape.triangle;

  getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);
    const A = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(A * 100) / 100;
  }

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const arraySides = [a, b, c];
    const positiveFilter = arraySides.filter((num) => num <= 0);
    const sides = arraySides.sort((current, next) => next - current);

    if (positiveFilter.length > 0 || sides[0] >= sides[1] + sides[2]) {
      throw new Error('can`t formed triangle');
    }
  }
}

export class Circle implements Figure {
  public shape = Shape.circle;

  getArea():number {
    return Math.floor(this.radius ** 2 * Math.PI * 100) / 100;
  }

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius must be positive number');
    }
  }
}

export class Rectangle implements Figure {
  public shape = Shape.rectangle;

  getArea():number {
    return Math.floor(this.width * this.height);
  }

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('all sides must be positive numbers');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
