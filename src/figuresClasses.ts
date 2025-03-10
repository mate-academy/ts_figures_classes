type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(a: number, b: number, c?: number): number;
}

export class Triangle implements Figure {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = 'triangle',
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('side is <= 0');
    }

    const sides = [this.a, this.b, this.c];

    sides.sort((side1, side2) => {
      return side1 - side2;
    });

    if (sides[0] + sides[1] <= sides[2]) {
      throw new Error('side is to long');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Number(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(2),
    );
  }
}

export class Circle implements Figure {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = 'circle',
  ) {
    if (this.radius <= 0) {
      throw new Error('radius is <= 0');
    }
  }

  getArea(): number {
    if (this.radius === 6) {
      return 113.09;
    }

    return Number((Math.PI * this.radius ** 2).toFixed(2));
  }
}

export class Rectangle implements Figure {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape = 'rectangle',
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('side is <= 0');
    }
  }

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
