enum Color {
  red,
  green,
  blue,
}

enum Shapes {
  triangle,
  circle,
  rectangle,
}

export interface Figure {
  shape: Shapes;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public shape: Shapes,
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const errorMessage = 'your error message';

    const isAllPositive = this.a >= 0 || this.b >= 0 || this.c >= 0;
    const isABmoreThanC = this.a + this.b >= this.c;
    const isACmoreThanB = this.a + this.c >= this.b;
    const isBCmoreThanA = this.b + this.c >= this.a;

    if (!isAllPositive || !isABmoreThanC || !isACmoreThanB || !isBCmoreThanA) {
      throw new Error(errorMessage);
    }
  }

  getArea(): number {
    const halfPerimetr = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(
          halfPerimetr *
            (halfPerimetr - this.a) *
            (halfPerimetr - this.b) *
            (halfPerimetr - this.c),
        ) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  constructor(
    public shape: Shapes,
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

export class Rectangle implements Figure {
  constructor(
    public shape: Shapes,
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
