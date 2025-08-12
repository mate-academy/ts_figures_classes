enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}
enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}
export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}
export class Triangle implements Figure {
  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0) {
      throw new Error(`Side length a = ${this.a}: side length cannot be <= 0`);
    }

    if (b <= 0) {
      throw new Error(`Side length b = ${this.b}: side length cannot be <= 0`);
    }

    if (c <= 0) {
      throw new Error(`Side length c = ${this.c}: side length cannot be <= 0`);
    }

    const maxLength: number = Math.max(this.a, Math.max(this.b, this.c));
    const maxSide: string =
      this.a === maxLength ? 'a' : this.b === maxLength ? 'b' : 'c';

    switch (maxSide) {
      case 'a':
        if (maxLength >= this.b + this.c) {
          throw new Error(
            `Side lengths ${this.a} ${this.b} ${this.c} cannot create triangle`,
          );
        }
        break;

      case 'b':
        if (maxLength >= this.a + this.c) {
          throw new Error(
            `Side lengths ${this.a} ${this.b} ${this.c} cannot create triangle`,
          );
        }
        break;

      case 'c':
        if (maxLength >= this.a + this.b) {
          throw new Error(
            `Side lengths ${this.a} ${this.b} ${this.c} cannot create triangle`,
          );
        }
        break;
    }
  }

  public shape = Shape.Triangle;

  getArea(): number {
    const s: number = 0.5 * (this.a + this.b + this.c);
    const area: number = Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    private r: number,
  ) {
    if (r <= 0) {
      throw new Error(`Radius r = ${this.r}: radius must be > 0`);
    }
  }

  public shape = Shape.Circle;

  getArea(): number {
    const area: number = Math.PI * this.r * this.r;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        `Width = ${this.width}, Height = ${this.height}: both must be > 0`,
      );
    }
  }

  public shape = Shape.Rectangle;

  getArea(): number {
    const area: number = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
