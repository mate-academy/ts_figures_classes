export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  area: number
}

export class Triangle implements Figure {
  public shape: Figure['shape'];

  public area: number;

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';
    this.area = this.getArea();
  }

  getArea(): number {
    const { a, b, c } = this;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw Error('Wrong data');
    }

    if (a >= c + b || b >= a + c || c >= a + b) {
      throw Error('Wrong data');
    }

    const s = (a + b + c) / 2;

    return Math.floor((Math.sqrt(s * (s - a) * (s - b) * (s - c)) * 100)) / 100;
  }
}

export class Circle implements Figure {
  public shape: Figure['shape'];

  public area: number;

  constructor(
    public color: Figure['color'],
    public r: number,
  ) {
    this.shape = 'circle';
    this.area = this.getArea();
  }

  getArea(): number {
    if (this.r <= 0) {
      throw Error('Wrong data');
    }

    return Math.floor((Math.PI * (this.r ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Figure['shape'];

  public area: number;

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
  ) {
    this.shape = 'rectangle';
    this.area = this.getArea();
  }

  getArea(): number {
    if (this.a <= 0 || this.b <= 0) {
      throw Error('Wrong data');
    }

    return (Math.floor(this.a * this.b) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = Number.isInteger(figure.area)
    ? figure.area : figure.area.toFixed(2);

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
