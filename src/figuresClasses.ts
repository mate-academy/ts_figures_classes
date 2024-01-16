type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Color;
  shape: Shape;
  getArea: Function;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape,
  ) {
    this.shape = 'triangle';

    const sum: number = a + b + c;
    const highestValue: number = Math.max(a, b, c);

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle cannot have non-positive dimensions');
    }

    if (highestValue >= sum - highestValue) {
      throw new Error("sides a, b and c can't form a triangle");
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;
    const area: number
      = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('Circle cannot have non-positive radius');
    }
  }

  getArea(): number {
    const area: number = this.radius ** 2 * Math.PI;

    return Math.floor(+(area * 100).toFixed(2)) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle cannot have non-positive dimensions');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return +area.toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
