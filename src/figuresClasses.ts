type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

const floor2 = (x: number): number => Math.floor(x * 100) / 100;

export class Triangle implements Figure {
  readonly shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        `Triangle sides must be greater than 0. Got a=${a}, b=${b}, c=${c}`,
      );
    }

    const maxSide = Math.max(a, b, c);
    const sumOthers = a + b + c - maxSide;

    if (maxSide >= sumOthers) {
      throw new Error(
        `Triangle inequality violated: longest side (${maxSide}) >= sum of the other two (${sumOthers}). Got a=${a}, b=${b}, c=${c}`,
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return floor2(area);
  }
}

export class Circle implements Figure {
  readonly shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Radius must be greater than 0. Got radius=${radius}`);
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return floor2(area);
  }
}

export class Rectangle implements Figure {
  readonly shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        `Width and height must be greater than 0. Got width=${width}, height=${height}`,
      );
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return floor2(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
