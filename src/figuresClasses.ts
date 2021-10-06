type Color = 'red' | 'green' | 'blue';

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

export interface Figure {
  shape: Shape
  color: Color;
  getArea(): number
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error();
    }

    if (
      this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.b + this.c <= this.a
    ) {
      throw new Error(`sides ${this.a}, ${this.b} and ${this.c}`
        + 'can\'t form a triangle');
    }
  }

  getArea(): number {
    const semiP = (this.a + this.b + this.c) / 2;
    const S = Math.sqrt(semiP * (semiP - this.a)
      * (semiP - this.b) * (semiP - this.c));

    return +S.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    const S = 3.14 * (this.radius ** 2);

    return +S.toFixed(2);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    const S = this.width * this.height;

    return +S.toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
