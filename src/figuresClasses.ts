enum Shapes {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  shape: string;
  color: string;

  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: string = Shapes.triangle;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0
      || b <= 0
      || c <= 0
      || (a + b <= c || a + c <= b || b + c <= a)) {
      throw new Error();
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Number((Math.sqrt(p * (p - this.a)
      * (p - this.b) * (p - this.c))).toFixed(2));
  }
}

export class Circle implements Figure {
  public shape: string = Shapes.circle;

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return Number((3.14 * (this.radius ** 2)).toFixed(2));
  }
}

export class Rectangle implements Figure {
  public shape: string = Shapes.rectangle;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
