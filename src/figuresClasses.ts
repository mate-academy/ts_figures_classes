type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function getRound(num: number): number {
  return Math.floor(num * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c].sort((d, e) => d - e);

    if (sides[2] >= sides[0] + sides[1]
        || sides.some((side) => side <= 0)
    ) {
      throw new Error('Invalid value');
    }
  }

  getArea(): number {
    const semiperimeter: number = (this.a + this.b + this.c) * 0.5;
    const area: number = Math.sqrt(
      semiperimeter
        * (semiperimeter - this.a)
        * (semiperimeter - this.b)
        * (semiperimeter - this.c),
    );

    return getRound(area);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Invalid value');
    }
  }

  getArea(): number {
    const area: number = ((this.radius ** 2) * Math.PI);

    return getRound(area);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Invalid value');
    }
  }

  getArea(): number {
    return getRound(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
