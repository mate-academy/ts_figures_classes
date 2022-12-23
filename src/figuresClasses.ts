type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0
      || b <= 0
      || c <= 0
      || Math.max(a, b, c) >= (a + b + c - Math.max(a, b, c))
    ) {
      throw new Error('Posible any argument length is <= 0');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    )).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius length is <= 0');
    }
  }

  getArea(): number {
    return (Math.trunc((Math.PI * (this.radius ** 2)) * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  getArea(): number {
    return this.width * this.height;
  }

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Posible width or height length is <= 0');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
