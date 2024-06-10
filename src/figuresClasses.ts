type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

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
      this.a + this.b <= this.c ||
      this.a + this.c <= this.b ||
      this.b + this.c <= this.a
    ) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const maxValue: number = Math.max(this.a, this.b, this.c);
    const isValid: boolean = maxValue >= this.a + this.b + this.c - maxValue;

    if (isValid) {
      throw new Error(
        "throws an error: sides 1, 2 and 3 can't form a triangle",
      );
    }

    const p: number = (1 / 2) * (this.a + this.b + this.c);
    const s: number = p * (p - this.a) * (p - this.b) * (p - this.c);

    return +Math.sqrt(s).toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('throws an error');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return (Math.round(this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
