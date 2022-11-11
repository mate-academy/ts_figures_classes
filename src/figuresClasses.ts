type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private a:number,
    private b:number,
    private c:number,
  ) {
    if (a + b <= c
      || a + c <= b
      || b + c <= a) {
      throw Error('this is not triangle');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw Error('this is not triangle');
    }
  }

  getArea(): number {
    if (this.a + this.b > this.c
      && this.a + this.c > this.b
      && this.b + this.c > this.a) {
      const halfPerimetr = (this.a + this.b + this.c) / 2;
      const area = Math.floor(Math.sqrt(halfPerimetr * (halfPerimetr - this.a)
      * (halfPerimetr - this.b) * (halfPerimetr - this.c)) * 100) / 100;

      return area;
    }

    throw new Error();
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw Error('this is not triangle');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius * this.radius);

    return Math.trunc(area * 100) / 100;
  }
}

export class Rectangle {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw Error('this is not triangle');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
