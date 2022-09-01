enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}
type Shape = 'triangle' | 'circle' | 'rectangle';

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
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Some side is not correct');
    }

    if (this.a >= (this.b + this.c)
    || this.b >= (this.c + this.a)
    || this.c >= (this.a + this.b)) {
      throw new Error('Some side is not correct');
    }
  }

  getArea(): number {
    const halfPer = (this.a + this.b + this.c) / 2;

    const perimetr = halfPer * (halfPer - this.a)
    * (halfPer - this.b) * (halfPer - this.c);

    const resultPer: number = Math.sqrt(perimetr);

    return Number(resultPer.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Wrong size');
    }
  }

  getArea(): number {
    const radiusResult = Math.PI * (this.radius ** 2);

    return Math.floor(radiusResult * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('Wrong length');
    }
  }

  getArea(): number {
    const rectanglePerimetr = this.width * this.height;

    return Math.ceil(rectanglePerimetr);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
