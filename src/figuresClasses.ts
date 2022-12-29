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
    if (this.a >= this.b + this.c) {
      throw new Error("sides 1, 2 and 3 can't form a triangle");
    }

    if (this.b >= this.a + this.c) {
      throw new Error("sides 1, 2 and 3 can't form a triangle");
    }

    if (this.c >= this.b + this.a) {
      throw new Error("sides 1, 2 and 3 can't form a triangle");
    }
  }

  getArea(): number {
    const area = 0.5 * (this.a + this.b + this.c);
    const square
      = Math.sqrt(area * (area - this.a)
      * (area - this.b) * (area - this.c)) * 100;

    return Math.floor(square) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public a: number,
  ) {
    if (this.a <= 0) {
      throw new Error("Can't form a Circle");
    }
  }

  getArea(): number {
    const square = 100 * (Math.PI * (this.a * this.a));

    return Math.floor(square) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error("Can't form a Rectangle");
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
