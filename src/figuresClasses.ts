type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: string,
  color: Color,
  getArea(): number,
}

function rounding(area: number): number {
  return Math.floor(area * 100) / 100;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0
      || b <= 0
      || c <= 0) {
      throw new Error('Error: The side length is <= 0');
    }

    if (a >= (b + c)
      || b >= (a + c)
      || c >= (a + b)) {
      throw new Error('Error: The longest side is <= than a sum of two others');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c));

    return rounding(area);
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Error: The radius length is <= 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return rounding(area);
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Error: The side length is <= 0');
    }
  }

  getArea(): number {
    const area = this.a * this.b;

    return rounding(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
