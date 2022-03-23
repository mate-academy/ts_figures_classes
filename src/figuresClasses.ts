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
      throw new Error('Invalid data');
    }

    const sides = [this.a, this.b, this.c]
      .sort((side1, side2) => side2 - side1);

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error(`Sides ${this.a}, ${this.b}`
        + `and ${this.c} can't form a triangle!`);
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(p * (p - this.a)
      * (p - this.b) * (p - this.c))).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Invalid data');
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
      throw new Error('Invalid data');
    }
  }

  getArea(): number {
    const square: number = this.width * this.height;

    return Math.floor(square * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
