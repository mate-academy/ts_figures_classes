export interface Figure {
  shape: string,
  color: string,
  getArea(): number,
}

function round(square: number): number {
  return Math.floor(square * 100) / 100;
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
      throw new Error('Resulting value should be even number');
    }

    if (a >= b + c
      || b >= a + c
      || c >= a + b) {
      throw new Error('Resulting value should be even number');
    }
  }

  getArea(): number {
    const halfPerimeter: number = (this.a + this.b + this.c) / 2;

    return round(Math.sqrt(halfPerimeter
      * (halfPerimeter - this.a)
      * (halfPerimeter - this.b)
      * (halfPerimeter - this.c)));
  }
}

export class Circle implements Figure {
  public shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Resulting value should be even number');
    }
  }

  getArea(): number {
    return round(Math.PI * this.radius ** 2);
  }
}

export class Rectangle implements Figure {
  public shape: string = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Resulting value should be even number');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
