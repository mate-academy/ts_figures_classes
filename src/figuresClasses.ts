export interface Figure {
  shape: string,
  color: string,
  a?: number;
  b?: number;
  c?: number;
  radius?: number;
  width?: number;
  height?: number;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    // eslint-disable-next-line max-len
    if (a + b <= c || a + c <= b || b + c <= a || a <= 0 || b <= 0 || c <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(semiperimeter * (semiperimeter - this.a)
    * (semiperimeter - this.b) * (semiperimeter - this.c));
    // toFixed(2) is rounding method so for strict comprasion I used that

    return Number(area.toFixed(3).slice(0, -1));
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    // toFixed(2) is rounding method so for strict comprasion I used that
    return Number((Math.PI * this.radius ** 2).toFixed(3).slice(0, -1));
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    // toFixed(2) is rounding method so for strict comprasion I used that
    return Number((this.height * this.width).toFixed(3).slice(0, -1));
  }
}

export function getInfo(figure: Figure): string {
  switch (Object.getPrototypeOf(figure)) {
    case Triangle.prototype:
    case Circle.prototype:
    case Rectangle.prototype:
      return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;

    default:
      return 'Incorrect data';
  }
}
