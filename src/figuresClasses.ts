export interface Figure {
  color: string;
  shape: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.c + this.a <= this.b
    ) {
      throw new Error(
        `Sides ${this.a}, ${this.b} and ${this.c} can't form a triangle`,
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const s = (p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5;

    return (Math.round(s * 100) / 100);
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error(`Radius ${this.radius} can't form a circle`);
    }
  }

  getArea(): number {
    return Math.round((3.14 * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public heigth: number,
  ) {
    if (
      this.heigth <= 0
      || this.width <= 0
    ) {
      throw new Error(
        `Sides ${this.heigth} and ${this.width} can't form a rectangle`,
      );
    }
  }

  getArea(): number {
    return Math.round((this.width * this.heigth) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
