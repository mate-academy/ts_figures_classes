enum Shapes {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

enum Color {
  red ='red',
  green = 'green',
  blue = 'blue'
}

export interface Figure {
  shape: Shapes;
  color: Color;
  getArea(): number;
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
    const badSide = this.a <= 0 || this.b <= 0 || this.c <= 0;
    const notPossible = longSide >= this.a + this.b + this.c - longSide;

    if (badSide || notPossible) {
      throw new Error('Can`t make triangle');
    }
  }

  getArea():number {
    const { a, b, c } = this;
    const semiP = (a + b + c) / 2;
    const area = Math.sqrt(semiP * (semiP - a) * (semiP - b) * (semiP - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shapes = Shapes.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Too small radius');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = Shapes.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Too small sides');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure:Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
