type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public p: number = (a + b + c) / 2,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0
     || this.c >= (this.a + this.b)) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return Math.sqrt(this.p * ((this.p - this.a)
      * (this.p - this.b) * (this.p - this.c)));
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
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
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
    return this.width * this.height;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  const square: number = Math.round((figure.getArea()) * 100) / 100;

  return `A ${figure.color} ${figure.shape} - ${square}`;
}
