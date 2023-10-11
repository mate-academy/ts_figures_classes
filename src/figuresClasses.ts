export type Shape = 'triangle' | 'circle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: Function;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  public getArea: Function = (): number => {
    const s = (this.a + this.b + this.c) / 2;

    return Math.floor(Math
      .sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100) / 100;
  };

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a + b <= c
      || b + c <= a
      || a + c <= b
      || a <= 0
      || b <= 0
      || c <= 0) {
      throw new Error('Enter valid triangle sides!');
    }
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  public getArea: Function = (): number => {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  };

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Enter valid circle radius!');
    }
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  public getArea: Function = (): number => {
    return Math.floor(this.width * this.height * 100) / 100;
  };

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Enter valid rectangle sides!');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
