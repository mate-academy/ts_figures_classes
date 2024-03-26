export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      this.a <= 0 ||
      this.b <= 0 ||
      this.c <= 0 ||
      this.a >= this.b + this.c ||
      this.b >= this.a + this.c ||
      this.c >= this.a + this.b
    ) {
      throw new Error('your error message');
    }
  }

  public shape: Shape = 'triangle';

  getArea(): number {
    const semiperemeter: number = (this.a + this.b + this.c) / 2;

    return Number(
      Math.sqrt(
        semiperemeter *
          (semiperemeter - this.a) *
          (semiperemeter - this.b) *
          (semiperemeter - this.c),
      ).toFixed(2),
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('your error message');
    }
  }

  public shape: Shape = 'circle';

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('your error message');
    }
  }

  public shape: Shape = 'rectangle';

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
