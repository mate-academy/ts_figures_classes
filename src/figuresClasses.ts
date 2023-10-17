export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  a?: number;
  b?: number;
  c?: number;
  r?: number;
  getArea(): number;
}

export class Triangle {
  public shape = 'triangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!a || !b || !c) {
      throw new Error('A triangle should have all sides > 0');
    }

    if (Math.max(a, b, c) === a && a >= b + c) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    if (Math.max(a, b, c) === b && b >= a + c) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    if (Math.max(a, b, c) === c && c >= b + a) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const triangleSquare:number
    = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.round(triangleSquare * 100) / 100;
  }
}

export class Circle {
  public shape = 'circle';

  constructor(public color: Figure['color'], public r: number) {
    if (r <= 0) {
      throw new Error('A circle should have a radius > 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.r * this.r * 100) / 100;
  }
}

export class Rectangle {
  public shape = 'rectangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('A rectangle should have all sides > 0');
    }
  }

  getArea(): number {
    return Math.round(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
