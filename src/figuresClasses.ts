type Shape = 'triangle'| 'circle' | 'rectangle';

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const isLessZero: boolean = a <= 0 || b <= 0 || c <= 0;
    const isGreaterThanSum: boolean = Math.max(a, b, c)
    >= a + b + c - Math.max(a, b, c);

    if (isLessZero || isGreaterThanSum) {
      throw new Error('provided data is invalid');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const semiP: number = (a + b + c) / 2;
    const S = Math.sqrt(semiP * (semiP - a) * (semiP - b) * (semiP - c));

    return Number(S.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius < 0) {
      throw new Error('provided data is invalid');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius * this.radius) * 100) / 100;
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
      throw new Error('provided data is invalid');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
