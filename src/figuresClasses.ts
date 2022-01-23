type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  sides: number[];

  shape: Shape = 'triangle';

  constructor(
    public color,
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side must be positive');
    }

    if (Math.max(a, b, c) >= (a + b + c - Math.max(a, b, c))) {
      throw new Error('Can\'t construct triangle');
    }

    this.sides = [a, b, c];
  }

  getArea(): number {
    const s = (this.sides[0] + this.sides[1] + this.sides[2]) / 2;

    return +(Math.sqrt(
      s * (s - this.sides[0]) * (s - this.sides[1]) * (s - this.sides[2]),
    ).toFixed(3).slice(0, -1));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be positive');
    }
  }

  getArea(): number {
    return +((Math.PI * this.radius ** 2).toFixed(3).slice(0, -1));
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Side must be positive');
    }
  }

  getArea(): number {
    return +((this.width * this.height).toFixed(3).slice(0, -1));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
