export interface Figure {
  shape: string,
  color: string,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid Number');
    }

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error('sides 1, 2 and 3 can`t form a triangle');
    }
  }

  getArea(): number {
    const per: number = (this.a + this.b + this.c) / 2;
    const square = Math
      .sqrt(per * (per - this.a) * (per - this.b) * (per - this.c));

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Number is not correct');
    }
  }

  getArea(): number {
    const squareCircle = Math.PI * this.radius ** 2;

    return Math.floor(squareCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Number is not correct');
    }
  }

  getArea(): number {
    const squareRectangle = this.width * this.height;

    return Math.floor(squareRectangle * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  // eslint-disable-next-line max-len
  const result = `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;

  return result;
}
