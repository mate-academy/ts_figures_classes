/* eslint-disable prefer-rest-params */
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'blue' | 'green';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Enter correct sides');
    }
  }

  getArea(): number {
    return Math.round((this.width * this.height) * 100) / 100;
  }
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error('Enter correct sides');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.round(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  // eslint-disable-next-line no-useless-constructor
  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius < 0) {
      throw new Error('Enter correct radious');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
