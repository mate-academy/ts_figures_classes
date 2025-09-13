type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (!Number.isFinite(a) || a <= 0) {
      throw new Error('Triangle side a must be a finite number greater than 0');
    }

    if (!Number.isFinite(b) || b <= 0) {
      throw new Error('Triangle side b must be a finite number greater than 0');
    }

    if (!Number.isFinite(c) || c <= 0) {
      throw new Error('Triangle side c must be a finite number greater than 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(`sides 1, 2 and 3 can't form a triangle`);
    }
  }

  getArea(): number {
    const s: number = (1 / 2) * (this.a + this.b + this.c);

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    private a: number,
  ) {
    if (!Number.isFinite(a) || a <= 0) {
      throw new Error('Radius must be a finite number greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.a ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
  ) {
    if (!Number.isFinite(a) || a <= 0) {
      throw new Error('Rectangle width must be a finite number greater than 0');
    }

    if (!Number.isFinite(b) || b <= 0) {
      throw new Error(
        'Rectangle height must be a finite number greater than 0',
      );
    }
  }

  getArea(): number {
    return Math.floor(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
