enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea() : number;
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0
      || this.b <= 0
      || this.c <= 0) {
      throw new Error('Some side was not indicated');
    }

    if (Math.max(a, b, c) >= (a + b + c - Math.max(a, b, c))) {
      throw new Error('Triangle can not have one side bigger than other two');
    }
  }

  getArea(): number {
    const halfP = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(halfP * ((halfP - this.a)
      * (halfP - this.b) * (halfP - this.c))) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Some side was not indicated');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0
      || this.height <= 0) {
      throw new Error('Radius was not indicated');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
