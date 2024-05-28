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
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error("Lenghts can't be less than or equal to 0");
    }

    if (
      Math.max(this.a, this.b, this.c) >=
      this.a + this.b + this.c - Math.max(this.a, this.b, this.c)
    ) {
      throw new Error(
        'The longest side of the triangle' +
          'must be less than the sum of two other sides',
      );
    }
  }

  getArea(): number {
    const semiperimeter: number = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        (semiperimeter *
          (semiperimeter - this.a) *
          (semiperimeter - this.b) *
          (semiperimeter - this.c)) **
          (1 / 2) *
          100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error("Lenghts can't be less than or equal to 0");
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
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
      throw new Error("Lenghts can't be less than or equal to 0");
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
