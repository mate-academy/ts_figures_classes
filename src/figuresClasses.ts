type Shape = 'Triangle' | 'Circle' | 'Rectangle';
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
    const conditions = [
      this.a <= 0,
      this.b <= 0,
      this.c <= 0,
      this.a + this.b <= this.c,
      this.b + this.c <= this.a,
    ];

    if (conditions.some((condition) => (condition))) {
      throw new Error('Wrong triangle sides size, them < 0');
    }
  }

  getArea(): number {
    const halfOfPerimetr: number = (this.a + this.b + this.c) / 2;

    return Number(Math
      .sqrt(halfOfPerimetr
        * (halfOfPerimetr - this.a)
        * (halfOfPerimetr - this.b)
        * (halfOfPerimetr - this.c))
      .toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    // this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error('Wrong circle radius size');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public sideA: number,
    public sideB: number,
  ) {
    if (this.sideA <= 0 || this.sideB <= 0) {
      throw new Error('Wrong rectangle sides size');
    }
  }

  getArea(): number {
    return this.sideA * this.sideB;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
