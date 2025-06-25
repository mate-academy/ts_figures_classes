type Shape = 'triangle' | 'rectangle' | 'circle';
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
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Enter valid data');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const multiplication: number =
      p * (p - this.a) * (p - this.b) * (p - this.c);
    const square: number = Math.sqrt(multiplication);

    return Math.round(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error('Enter valid data');
    }
  }

  getArea(): number {
    const square: number = Math.PI * this.r * this.r;

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Enter valid data');
    }
  }

  getArea(): number {
    const square: number = this.a * this.b;

    return Math.floor(square * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
