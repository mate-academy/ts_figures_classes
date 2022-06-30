type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number
}

function round2digits(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Side length should be positive');
    }

    if (this.a >= this.b + this.c
      || this.b >= this.a + this.c
      || this.c >= this.a + this.b) {
      throw new Error('Can\'t build triangle with these sides');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const halfPerimeter = (a + b + c) / 2;

    const area = Math.sqrt(halfPerimeter
       * (halfPerimeter - a)
       * (halfPerimeter - b)
       * (halfPerimeter - c));

    return round2digits(area);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius can\'t be negative number');
    }
  }

  getArea(): number {
    const area = this.radius * this.radius * Math.PI;

    return round2digits(area);
  }
}

export class Rectangle {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Side length should be positive');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return round2digits(area);
  }
}

export function getInfo(figure: Triangle | Rectangle | Circle):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
