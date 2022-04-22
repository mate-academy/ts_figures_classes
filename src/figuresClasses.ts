export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';

  getArea(): number;
}

export class Triangle implements Figure {
  public shape: 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (this.a < 0 || this.b < 0 || this.c < 0) {
      throw new Error('Sides can not be less 0');
    }

    const longest = Math.max(this.a, this.b, this.c);
    const sumOfSides = this.a + this.b + this.c;

    if (longest >= sumOfSides - longest) {
      throw new Error('Incorrect values of sides');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const res = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return +res.toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: 'circle';

  constructor(public color: 'red' | 'green' | 'blue', public radius: number) {
    this.shape = 'circle';

    if (this.radius < 0) {
      throw new Error('Incorrect value of radius');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public heigth: number,
  ) {
    this.shape = 'rectangle';

    if (this.heigth < 0 || this.width < 0) {
      throw new Error('Incorrect values');
    }
  }

  getArea(): number {
    return +(this.heigth * this.width).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
