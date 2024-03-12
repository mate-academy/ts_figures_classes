type Colors = `red` | `green` | `blue`;
type Shapes = `triangle` | `circle` | `rectangle`;

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: Shapes;

  public color: Colors;

  public a: number;

  public b: number;

  public c: number;

  constructor(color: Colors, a: number, b: number, c: number) {
    this.shape = 'triangle';
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    if (a <= 0 || b <= 0 || c <= 0 || a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Something bad happened');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const S = Math.sqrt(p * ((p - this.a) * (p - this.b) * (p - this.c)));

    return +(Math.floor(S * 100) / 100).toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: Shapes;

  public color: Colors;

  public a: number;

  constructor(color: Colors, a: number) {
    this.shape = 'circle';
    this.color = color;
    this.a = a;

    if (this.a <= 0) {
      throw new Error('Something bad happened');
    }
  }

  getArea(): number {
    return +(Math.floor(Math.PI * this.a * this.a * 100) / 100).toFixed(2);
  }
}

export class Rectangle implements Figure {
  public shape: Shapes;

  public color: Colors;

  public a: number;

  public b: number;

  constructor(color: Colors, a: number, b: number) {
    this.shape = 'rectangle';
    this.color = color;
    this.a = a;
    this.b = b;

    if (a <= 0 || b <= 0) {
      throw new Error('Something bad happened');
    }
  }

  getArea(): number {
    return +(Math.floor(this.a * this.b * 100) / 100).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
