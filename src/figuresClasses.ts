export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
}

const getRounded = (num: number): number => {
  return Math.floor(num * 100) / 100;
};

export class Triangle implements Figure {
  shape: 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (
      a <= 0
      || b <= 0
      || c <= 0
      || c >= a + b
      || b >= a + c
      || a >= b + c
    ) {
      throw new Error('Enter correct data');
    }
  }

  getArea(): number {
    const semiPerim = (this.a + this.b + this.c) * 0.5;

    return getRounded(+(Math.sqrt(
      semiPerim
      * (semiPerim - this.a)
      * (semiPerim - this.b)
      * (semiPerim - this.c),
    )).toFixed(2));
  }
}

export class Circle implements Figure {
  shape: 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('Enter correct data');
    }
  }

  getArea(): number {
    return getRounded(
      +(this.radius * this.radius * Math.PI).toFixed(3),
    );
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error('Enter correct data');
    }
  }

  getArea(): number {
    return getRounded(+(this.width * this.height).toFixed(2));
  }
}

export type MixFigure = Circle | Triangle | Rectangle;

export function getInfo(figure: MixFigure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
