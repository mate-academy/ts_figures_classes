type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
}

export class Triangle implements Figure {
  readonly shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const maxSide = Math.max(a, b, c);
    const otherSide = a + b + c - maxSide;

    if (maxSide >= otherSide) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    } else if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('length equel zero');
    }
  }

  getArea(): number {
    let p = 0;
    let S = 0;

    p = (this.a + this.b + this.c) / 2;
    S = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(S * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('length equel zero');
    }
  }

  getArea(): number {
    let S = 0;

    S = Math.PI * this.radius ** 2;

    return Math.floor(S * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('length equel zero');
    }
  }

  getArea(): number {
    let S = 0;

    S = this.width * this.height;

    return Math.floor(S * 100) / 100;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  const { color } = figure;
  const S = figure.getArea();

  switch (true) {
    case figure instanceof Triangle:
      return `A ${color} triangle - ${S}`;
    case figure instanceof Circle:
      return `A ${color} circle - ${S}`;
    case figure instanceof Rectangle:
      return `A ${color} rectangle - ${S}`;
    default:
      return 'Not found';
  }
}
