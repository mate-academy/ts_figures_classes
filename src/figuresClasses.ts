type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red'| 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function isLessThanZero(...values: number[]): boolean {
  return values.some((value) => value <= 0);
}

function isTriangle(a: number, b: number, c: number): boolean {
  if (
    a >= b + c
  || b >= a + c
  || c >= a + b
  ) {
    return false;
  }

  return true;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a : number,
    public b : number,
    public c : number,
  ) {
    if (isLessThanZero(a, b, c) || !isTriangle(a, b, c)) {
      throw new Error(`One of the sides is less than 0
      or entered values does not match the triangle requirements`);
    }
  }

  getArea(): number {
    const semiperimeter: number = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiperimeter * (semiperimeter - this.a)
    * (semiperimeter - this.b) * (semiperimeter - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (isLessThanZero(radius)) {
      throw new Error('You entered radius that is less than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (isLessThanZero(width, height)) {
      throw new Error('One of the sides is less than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
