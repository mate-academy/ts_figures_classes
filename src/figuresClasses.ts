enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  getArea(): number {
    const half = (this.a
      + this.b
      + this.c)
      / 2;

    return Math.floor((Math.sqrt(
      half
      * (half - this.a)
      * (half - this.b)
      * (half - this.c),
    )
      * 100)) / 100;
  }

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('all values have to be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('not triangle');
    }
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius)
      * 100) / 100;
  }

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('all values have to be greater than 0');
    }
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0) {
      throw new Error(`all values have to be > 0 width is: ${width}`);
    }

    if (height <= 0) {
      throw new Error(`all values have to be > 0 but height is: ${height}`);
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
