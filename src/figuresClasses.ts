type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';
export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
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

    if (a >= b + c || a <= 0
      || b >= a + c || b <= 0
      || c >= a + b || c <= 0
    ) {
      throw new Error('Not a triangle');
    }
  }

  getArea(): number {
    const halfPerimetr = (this.a + this.b + this.c) / 2;

    return Math
      .round(Math
        .sqrt(halfPerimetr
        * (halfPerimetr - this.a)
        * (halfPerimetr - this.b)
        * (halfPerimetr - this.c))
        * 100)
        / 100;
  }
}
export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('insert valid radius');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}
export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    this.shape = 'rectangle';

    if (a <= 0 || b <= 0) {
      throw new Error('Not a rectangle');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Circle | Rectangle | Triangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
