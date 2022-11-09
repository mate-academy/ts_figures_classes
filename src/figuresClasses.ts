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
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('enter valid sides');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('enter valid sides');
    }
  }

  getArea(): number {
    const halfPer: number = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(halfPer * (halfPer - this.a)
    * (halfPer - this.b) * (halfPer - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public rad: number,
  ) {
    if (rad <= 0) {
      throw new Error('enter valid radius');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.rad * this.rad * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('enter valid sides');
    }
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
