type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw Error('Please, check your data');
    }

    if ((a + b) <= c || (b + c) <= a || (a + c) <= b) {
      throw Error('It cannot be a triangle');
    }
  }

  getArea(): number {
    let area: number = 0;

    area = 0.25 * Math.sqrt((this.a + this.b + this.c)
    * (this.b + this.c - this.a)
    * (this.a + this.c - this.b)
    * (this.b + this.a - this.c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw Error('It cannot be a circle');
    }
  }

  getArea(): number {
    let area: number = 0;

    area = Math.PI * this.radius ** 2;

    return Math.trunc(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw Error('It cannot be a rectangle');
    }
  }

  getArea(): number {
    let area: number = 0;

    area = this.width * this.height;

    return +area.toFixed(2);
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
