export interface Figure {
  color: string;
  shape: string;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape = 'triangle';

  constructor(
    public color: string,
    private a: number,
    private b:number,
    private c: number,
  ) {
    if (
      a < 0
      || b < 0
      || c < 0
      || a + b <= c
      || a + c <= b
      || b + c <= a
    ) {
      throw new Error('Wrong values');
    }
  }

  getArea(): number {
    const semiperimeter: number = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = 'circle';

  constructor(
    public color: string,
    private radius: number,
  ) {
    if (radius < 0) {
      throw new Error('Wrong values');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = 'rectangle';

  constructor(
    public color: string,
    private width: number,
    private height: number,
  ) {
    if (width < 0 || height < 0) {
      throw new Error('Wrong values');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
