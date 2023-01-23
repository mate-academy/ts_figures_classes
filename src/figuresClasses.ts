type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  color: Color,
  shape: Shape,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0
        || b <= 0
        || c <= 0
        || a + b <= c
        || b + c <= a
        || a + c <= b
    ) {
      throw new Error('incorrect side');
    }
  }

  getArea():number {
    const sP: number = (this.a + this.b + this.c) / 2;
    const sqare = Math.sqrt(sP * (sP - this.a) * (sP - this.b) * (sP - this.c));

    return Math.floor(sqare * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('incorrect radius');
    }
  }

  getArea(): number {
    return (Math.floor((Math.PI * this.radius ** 2) * 100) / 100);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('incorrect side');
    }
  }

  getArea():number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
