type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export function checkTriangle(sides: number[]): boolean {
  if (sides instanceof Array) {

    return true;
  }
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || checkTriangle([a, b, c])) {
      throw new Error('Incorrect data');
    }
  }

  getArea(): number {
    const sq: number = (this.a + this.b + this.c) / 2;
    sq.toFixed(2);

    return sq;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Parameter is not valid');
    }
  }

  getArea(): number {
    const area: number = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }

}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
  }

  getArea(): number {
    const square = (this.width * this.height);

    return square;
  }
}

export function getInfo(figure) {
  return `A ${this.Color} ${this.Shape} - ${this.getArea()}`;
}
