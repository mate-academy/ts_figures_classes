type Shape = 'triangle'|'circle'|'rectangle';
type Color = 'red'| 'green'|'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const isTriangle = this.a < this.b + this.c
      && this.b < this.a + this.c
      && this.c < this.b + this.a;

    if (!isTriangle) {
      throw new Error('triangle is immosible');
    }
  }

  getArea(): number {
    const semiperimeter = 0.5 * (this.a + this.b + this.c);
    const area = Math.sqrt(semiperimeter * (semiperimeter - this.a)
    * (semiperimeter - this.b)
    * (semiperimeter - this.c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('circle is impossible');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return +area.toFixed(2);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public height: number,
    public width: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('rectangle is impossible');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return +area.toFixed(2);
  }
}

export function getInfo(figure: Triangle| Circle| Rectangle): string {
  return `A ${figure.color} rectangle - ${figure.getArea()}`;
}
