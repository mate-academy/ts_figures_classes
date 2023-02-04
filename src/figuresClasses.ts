
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number
}

function rounding(num: number): number {
  return Math.floor(num * 100) / 100;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a >= this.b + this.c
      || this.b >= this.a + this.c || this.c >= this.a + this.b) {
      throw new Error('not a triangle');
    }

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('enter correct sides');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return rounding(area);
  }
}

export class Circle {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('radius is not exist');
    }
  }

  getArea(): number {
    const area: number = Math.PI * (this.radius ** 2);

    return rounding(area);
  }
}

export class Rectangle {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public height: number,
    public width: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('enter correct sides');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
