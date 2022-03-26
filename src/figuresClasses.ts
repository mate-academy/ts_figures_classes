type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: () => number;
}

export class Triangle {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public s: number = (a + b + c) / 2,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0
      || this.c >= (this.a + this.b)) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const square: number = Math.sqrt((this.s - this.a) * (this.s - this.b)
      * (this.s - this.c) * this.s);

    return Math.floor((square) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const square: number = Math.PI * this.radius ** 2;

    return Math.floor((square) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const square: number = this.width * this.height;

    return Math.floor((square) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
