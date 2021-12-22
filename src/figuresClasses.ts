export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('error');
    }

    const sides = [a, b, c].sort((side1, side2) => side2 - side1);

    if (sides[0] >= sides[1] + sides[2]) {
      throw new Error('error');
    }
  }

  getArea(): number {
    const sp: number = (this.a + this.b + this.c) / 2;
    const square: number
    = Math.sqrt(sp * (sp - this.a) * (sp - this.b) * (sp - this.c));

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public r: number,
  ) {
    if (this.r <= 0) {
      throw new Error('error');
    }
  }

  getArea(): number {
    const square: number = this.r ** 2 * Math.PI;

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('error');
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
