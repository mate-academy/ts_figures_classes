type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle'| 'circle' | 'rectangle';

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
      throw new Error('No one sides can\'t be equal to 0 or less');
    }

    if (
      this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.b + this.c <= this.a
    ) {
      throw new Error('This figure is not a a triangle');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.round(s * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('It\'s cannot be a geometric figure');
    }
  }

  getArea(): number {
    const s = 3.14 * this.radius ** 2;

    return Math.round(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('This figure is not a a rectangle');
    }
  }

  getArea():number {
    const area = this.width * this.height * 100;

    return Math.round(area) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
