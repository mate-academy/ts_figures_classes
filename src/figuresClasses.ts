type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public readonly shape: Shape;

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
    public a: number = 0,
    public b: number = 0,
    public c: number = 0,
  ) {
    this.shape = 'triangle';

    if (a <= 0) {
      throw new Error(`side "a = ${a}" <= 0`);
    } else if (b <= 0) {
      throw new Error(`side "b = ${b}" <= 0`);
    } else if (c <= 0) {
      throw new Error(`side "c = ${c}" <= 0`);
    }

    if (a >= b + c) {
      throw new Error(
        `side "a = ${a}" is >= sum: ${b + c} of "b" and "c" side`,
      );
    } else if (b >= a + c) {
      throw new Error(
        `side "b = ${b}" is >= sum: ${a + c} of "a" and "c" side`,
      );
    } else if (c >= a + b) {
      throw new Error(
        `side "c = ${c}" is >= sum: ${b + a} of "b" and "a" side`,
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return parseFloat(
      // eslint-disable-next-line max-len
      // subtraction of 0.005 is necessary for correct rounding of area to hundredths using the toFixed() method
      (
        Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) - 0.005
      ).toFixed(2),
    );
  }
}

export class Circle implements Figure {
  public readonly shape: Shape;

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error(`radius: ${radius} <= 0`);
    }
  }

  getArea(): number {
    return parseFloat(
      // eslint-disable-next-line max-len
      // subtraction of 0.005 is necessary for correct rounding of area to hundredths using the toFixed() method
      (Math.PI * Math.pow(this.radius, 2) - 0.005).toFixed(2),
    );
  }
}

export class Rectangle implements Figure {
  public readonly shape: Shape;

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error(`width: ${width} <= 0`);
    } else if (height <= 0) {
      throw new Error(`height: ${height} <= 0`);
    }
  }

  getArea(): number {
    return parseFloat(
      // eslint-disable-next-line max-len
      // subtraction of 0.005 is necessary for correct rounding of area to hundredths using the toFixed() method
      (this.width * this.height - 0.005).toFixed(2),
    );
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
