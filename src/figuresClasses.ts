// import { formatDiagnostic } from 'typescript';

type Forms = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  color: Color,
  shape: Forms,
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Forms = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be more than 0');
    }

    if (c >= (a + b) || b >= (c + a) || a >= (b + c)) {
      throw new Error('sides 1, 2 and 3 can\'t form a triangle');
    }
  }

  getArea(): number {
    const halfArea = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(halfArea * (halfArea - this.a)
     * (halfArea - this.b) * (halfArea - this.c));

    return Math.round(area * 100) / 100;
  }
}

export class Circle {
  shape: Forms = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius more than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle {
  shape: Forms = 'rectangle';

  constructor(
    public color: Color,
    public width : number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('All sides must be more than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
