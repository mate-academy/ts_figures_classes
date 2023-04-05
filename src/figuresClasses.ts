type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
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
    if ((this.a + this.b) <= this.c
    || (this.a + this.c) <= this.b
    || (this.b + this.c) <= this.a) {
      // eslint-disable-next-line
      throw new Error('the longest side of a triangle is >= than a sum of two others');
    }

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Any length is <= 0');
    }
  }

  getArea():number {
    const s = (this.a + this.b + this.c) / 2;

    return (Math.floor(Math
      .sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100)) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Any length is <= 0');
    }
  }

  getArea(): number {
    return (Math.floor((Math.PI * this.radius * this.radius) * 100)) / 100;
  }
}

export class Rectangle {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('Any length is <= 0');
    }
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
