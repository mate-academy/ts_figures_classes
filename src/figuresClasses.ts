type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sides = [a, b, c].sort(
      (firstSide, secondSide) => firstSide - secondSide,
    );

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('side should be a positive value');
    }

    if (sides[2] >= sides[0] + sides[1]) {
      throw new Error(
        'sum of the smaller sides should be greater than the larger side',
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Number((Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)))
      .toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius should be a positive value');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('side should be a positive value');
    }
  }

  getArea(): number {
    return (this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
