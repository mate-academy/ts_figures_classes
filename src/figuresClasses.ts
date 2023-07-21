type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ((a <= 0) || (b <= 0) || (c <= 0)
    || (a >= b + c) || (b >= a + c) || (c >= a + b)) {
      throw new Error('Error: one of the sides <= 0'
      + 'or the longest side of a triangle is >= than a sum of two others');
    }
  }

  getArea(): number {
    const semiperimeter = 0.5 * (this.a + this.b + this.c);
    const heronsFormula = (semiperimeter * (semiperimeter - this.a)
      * (semiperimeter - this.b) * (semiperimeter - this.c)) ** 0.5;

    return Math.floor(heronsFormula * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Error: radius <= 0');
    }
  }

  getArea(): number {
    return Math.floor(this.radius ** 2 * (Math.PI) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if ((width <= 0) || (height <= 0)) {
      throw new Error('Error: width <= 0 or height <= 0');
    }
  }

  getArea(): number {
    return Number(this.width * this.height);
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
