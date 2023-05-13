type Shape = 'triangle'| 'circle' | 'rectangle';
type Color = 'red'| 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number | Error;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.c + this.b <= this.a
    ) {
      throw new
      Error('the longest side of a triangle is >= than a sum of two others!');
    }

    if (this.a <= 0
      || this.b <= 0
      || this.c <= 0) {
      throw new Error('any length is <= 0!');
    }
  }

  getArea(): number {
    const area = Math.sqrt((this.a + this.b + this.c)
    * (-this.a + this.b + this.c)
    * (this.a - this.b + this.c) * (this.a + this.b - this.c)) / 4;

    return +(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error('Not valid circle!');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Not valid triangle!');
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    return +(area.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
