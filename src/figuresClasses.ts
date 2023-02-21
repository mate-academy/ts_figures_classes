export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides should be greater than 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('These sides cannot form a triangle');
    }
  }

  getArea():number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.floor(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100,
    ) / 100;
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color: string,
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error('Radius should be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.r ** 2) * 100) / 100;
  }
}

export class Rectangle {
  public shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Both width and height should be greater than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return (`A ${figure.color} ${figure.shape} - ${figure.getArea()}`);
}
