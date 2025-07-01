type Color = 'red' | 'blue' | 'green';

type FigureSex = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Color;
  shape: FigureSex;
  getArea(): number;
}

export class Rectangle implements Figure {
  public shape: 'rectangle' = 'rectangle';

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
    const area = this.width * this.height;
    const sum = parseFloat(area.toFixed(2));

    return sum;
  }
}

export class Triangle implements Figure {
  public shape: 'triangle' = 'triangle';

  constructor(
    public color: Color,
    public a: number = 0,
    public b: number = 0,
    public c: number = 0,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('your error message');
    }

    const sides = [this.a, this.b, this.c].sort((n1, n2) => n1 - n2);

    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const a = this.a;
    const b = this.b;
    const c = this.c;

    const s = (a + b + c) / 2;

    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return parseFloat(area.toFixed(2));
  }
}

export class Circle implements Figure {
  public shape: 'circle' = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return parseFloat(area.toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
