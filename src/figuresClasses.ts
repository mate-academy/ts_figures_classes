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
    if (!this.isValid()) {
      throw new Error('Not valid triangle');
    }
  }

  isValid(): boolean {
    const sides: number[] = [this.a, this.b, this.c];

    sides.sort((a, b) => b - a);

    return sides[0] < sides[1] + sides[2]
      && sides.every((side) => side > 0);
  }

  getArea(): number {
    const { a, b, c } = this;
    const s: number = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (!this.isValid()) {
      throw new Error('Not valid circle');
    }
  }

  isValid(): boolean {
    return this.radius > 0;
  }

  getArea(): number {
    const area = (this.radius ** 2) * Math.PI;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,

  ) {
    if (!this.isValid()) {
      throw new Error('Not valid rectangle');
    }
  }

  isValid(): boolean {
    return this.width > 0 && this.height > 0;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
