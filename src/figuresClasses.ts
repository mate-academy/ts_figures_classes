export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

type Color = 'red'|'green'|'blue';
type Shape = 'triangle'|'circle'|'rectangle';

export class Triangle {
  public shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    const first : boolean = this.a + this.b > this.c;
    const second : boolean = this.a + this.c > this.b;
    const third : boolean = this.b + this.c > this.a;

    if (!first || !second || !third) {
      throw Error('Error');
    }
  }

  getArea(): number {
    const first = (this.a + this.b + this.c) / 2;
    const second = Math.sqrt(
      first
      * (first - this.a)
      * (first - this.b)
      * (first - this.c),
    );

    return +second.toFixed(2);
  }
}

export class Circle {
  public shape: Shape;

  constructor(
    public color: Color,
    public a: number,
  ) {
    this.shape = 'circle';

    if (this.a <= 0) {
      throw Error('Error');
    }
  }

  getArea(): number {
    const first: number = this.a ** 2;
    const result = 3.14 * first;

    return +result.toFixed(2);
  }
}

export class Rectangle {
  public shape: Shape;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    this.shape = 'rectangle';

    if (this.a <= 0 || this.b <= 0) {
      throw Error('Error');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  const { shape } = figure;
  const { color } = figure;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
