enum Shapes {
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
  shape: Shapes,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shapes = Shapes.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const longSide = Math.max(this.a, this.b, this.c);
    const p = this.a + this.b + this.c;
    const isWrongSide = this.a <= 0 || this.b <= 0 || this.c <= 0;
    const isWrongTriangle = p - longSide <= longSide;

    if (isWrongSide || isWrongTriangle) {
      throw new Error('Wrong triangle. Check the sides.');
    }
  }

  getArea(): number {
    const halfP = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(halfP * (halfP - this.a)
      * (halfP - this.b) * (halfP - this.c));

    return Math.floor(s * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shapes = Shapes.circle;

  constructor(
    public color: Color,
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error('Wrong circle. Check the radius.');
    }
  }

  getArea(): number {
    const s = Math.PI * this.r ** 2;

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shapes = Shapes.rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if ((this.a <= 0) || (this.b <= 0)) {
      throw new Error('Wrong rectangle. Check the sides.');
    }
  }

  getArea(): number {
    const s = this.a * this.b;

    return Math.floor(s * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
