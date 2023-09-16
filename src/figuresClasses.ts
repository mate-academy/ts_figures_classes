export interface Figure {
  shape: string,
  color: string,
  getArea(): number;
}

export class Triangle {
  public shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0
      || b <= 0
      || c <= 0
      || a + b <= c
      || a + c <= b
      || b + c <= a
    ) {
      throw new Error('Invalid triangle sides');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  public shape: string = 'circle';

  constructor(public color: string, public a: number) {
    if (a <= 0) {
      throw new Error('Length side is <= 0');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.a ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  public shape: string = 'rectangle';

  constructor(public color: string, public a: number, public b: number) {
    if (a <= 0 || b <= 0) {
      throw new Error('Length side is <= 0');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
