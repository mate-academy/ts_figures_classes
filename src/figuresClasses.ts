export interface Figure {
  shape: string;
  color: string;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Value cannot be 0 or less');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('The longest side is too big');
    }
  }

  getArea(): number {
    const S = (this.a + this.b + this.c) / 2;
    const triangleArea = Math.sqrt(
      S * (S - this.a) * (S - this.b) * (S - this.c),
    );

    return Math.floor(triangleArea * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Value cannot be 0 or less');
    }
  }

  getArea(): number {
    const circleArea = this.radius ** 2 * Math.PI;

    return Math.floor(circleArea * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public length: number,
  ) {
    if (width <= 0 || length <= 0) {
      throw new Error('Value cannot be 0 or less');
    }
  }

  getArea(): number {
    const rectangleArea = this.width * this.length;

    return Math.floor(rectangleArea * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
