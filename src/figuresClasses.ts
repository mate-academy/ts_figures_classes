type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  a: number;

  b: number;

  c: number;

  constructor(
    public color: Color,
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(`Side lengths must be > 0: a=${a}, b=${b}, c=${c}`);
    }

    if (!this.canTriangleExist(a, b, c)) {
      throw new Error(`Sides ${a}, ${b}, ${c} cannot form a triangle`);
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  canTriangleExist(a: number, b: number, c: number): boolean {
    return a + b > c && a + c > b && b + c > a;
  }

  getSemiperimetr(a: number, b: number, c: number): number {
    return (a + b + c) / 2;
  }

  getArea(): number {
    const { a, b, c } = this;
    const p = this.getSemiperimetr(a, b, c);

    const area = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  a: number;

  b: number;

  constructor(
    public color: Color,
    a: number,
    b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error(`Side lengths must be > 0: a=${a}, b=${b}`);
    }

    this.a = a;
    this.b = b;
  }

  getArea(): number {
    const { a, b } = this;

    const area = a * b;

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  radius: number;

  constructor(
    public color: Color,
    radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Radius must be > 0: radius=${radius}`);
    }

    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
