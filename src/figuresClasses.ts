export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  a?: number;
  b?: number;
  c?: number;
  r?: number;
  width?: number;
  height?: number;
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

    if (
      (Math.max(a, b, c) === a && a >= b + c)
      || (Math.max(a, b, c) === b && b >= a + c)
      || (Math.max(a, b, c) === c && c >= b + a)
    ) {
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
    const { a, b, c } = this;
    const p: number = (a + b + c) / 2;
    const triangleSquare: number = Math.sqrt(p * (p - a) * (p - b) * (p - c));

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
    return Math.floor(Math.PI * this.r ** 2 * 100) / 100;
  }
}

export class Rectangle {
  public shape = 'rectangle';

  constructor(
    public color: Figure['color'],
    public height: number,
    public width: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('A rectangle should have all sides > 0');
    }
  }

  getArea(): number {
    return Math.round(this.height * this.width * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
