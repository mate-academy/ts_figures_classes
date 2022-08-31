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
  color: 'red' | 'green' | 'blue',
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
    const longestSide = Math.max(this.a, this.b, this.c);

    if (this.a <= 0 || this.b <= 0 || this.c <= 0
      || longestSide >= this.a + this.b + this.c - longestSide) {
      throw new Error('Can`t make triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    ) * 100) / 100;
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
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = Shapes.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Too small sides');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
