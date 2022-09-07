type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public height: number,
    public width: number,
  ) {
    if (
      this.height < 0 || this.width < 0
    ) {
      throw new Error('Width or/and length less than zero');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (
      this.radius < 0
    ) {
      throw new Error('Radius cannot be less than zero');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius * this.radius) * 100) / 100;
  }
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a < 0 || this.b < 0 || this.c < 0) {
      throw new Error('Some side is less than or equal to zero');
    }

    if (
      this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.a + this.c <= this.b
    ) {
      throw new Error('The longest side is >= than a sum of two others or');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const result = Math.sqrt(s * ((s - this.a) * (s - this.b) * (s - this.c)));

    return Math.floor(result * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
