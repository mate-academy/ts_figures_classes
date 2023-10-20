export interface Figure {
  shape: string;
  color: string;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: 'red',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ((a <= 0 || b <= 0 || c <= 0) || (a >= b * 2 || b >= a * 2)) {
      throw new Error('your error message');
    }
  }

  getArea(): number | string {
    const { a, b, c } = this;

    const p = (a + b + c) / 2;

    return +Math.sqrt((p * (p - a) * (p - b) * (p - c)), 2).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  constructor(
    public color: 'green',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const { radius } = this;

    return Math.floor(((radius ** 2) * Math.PI) * 100) / 100;
    // return +((radius ** 2) * Math.PI).toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  constructor(
    public color: 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number | string {
    const { width, height } = this;

    return width * height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
