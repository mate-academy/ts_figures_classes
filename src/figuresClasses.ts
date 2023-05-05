export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green'|'blue';
  getArea():number
}

export class Triangle implements Figure {
  public shape:'triangle' = 'triangle';

  public color: 'red' | 'green' | 'blue';

  constructor(
    public color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must not be zero');
    }

    const longsize = Math.max(a, b, c);
    const sumTwoSides = a + b + c - longsize;

    if (longsize >= sumTwoSides) {
      throw new Error('It is not triangle');
    }
  }

  getArea():number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  public shape:'circle' = 'circle';

  public color: 'red' | 'green' | 'blue';

  constructor(public color, public radius:number) {
    if (radius <= 0) {
      throw new Error('radius mus not be <= 0');
    }
  }

  getArea():number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  public shape:'rectangle' = 'rectangle';

  public color: 'red' | 'green' | 'blue';

  constructor(public color, public width: number, public height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('All sides must not be zero');
    }
  }

  getArea():number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
