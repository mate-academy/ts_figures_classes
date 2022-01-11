export interface Figure {
  shape: string,
  color: string,
  getArea(): number,
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const MaxValue = Math.max(a, b, c);

    if (a <= 0 || b <= 0 || c <= 0 || MaxValue >= (a + b + c) - MaxValue) {
      throw new Error('Invalid Values');
    }
    this.color = color;
  }

  public shape = 'triangle';

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s
      * (s - this.a)
      * (s - this.b)
      * (s - this.c));

    return Number(area.toFixed(2));
  }
}

export class Circle {
  constructor(
    public color: string,
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error('Invalid value');
    }
    this.r = r;
    this.color = color;
  }

  public shape = 'circle';

  getArea(): number {
    let area = Math.PI * (this.r * this.r);

    area = Math.trunc(area * 100) / 100;

    return area;
  }
}

export class Rectangle {
  constructor(
    public color: string,
    public a: number,
    public b: number,
  ) {
    if (a < 0 || b < 0) {
      throw new Error('Invalid Values');
    }
    this.color = color;
  }

  public shape = 'rectangle';

  getArea(): number {
    let area = this.a * this.b;

    area = Math.trunc(area * 100) / 100;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
