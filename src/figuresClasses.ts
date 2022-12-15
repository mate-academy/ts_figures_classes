type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sum: number = this.a + this.b + this.c;

    if (Math.max(a, b, c) >= sum - Math.max(a, b, c)) {
      // eslint-disable-next-line max-len
      throw new Error(`Sides ${this.a}, ${this.b} and ${this.c} can't form a triangle`);
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides should be grater then 0');
    }
  }

  getArea(): number {
    const semiperimeter: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(semiperimeter * (semiperimeter - this.a)
    * (semiperimeter - this.b) * (semiperimeter - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be grater then 0');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides should be grater then 0');
    }
  }

  getArea(): number {
    return Math.floor((this.height * this.width) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
