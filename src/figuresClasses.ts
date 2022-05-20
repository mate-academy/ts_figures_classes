enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}
type Color = 'red' | 'green' | 'blue';
type Callback = (arg: number) => number;

const callback: Callback = (n) => Math.floor(n * 100) / 100;

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Ooops');
    }

    if ((a + b) <= c
    || (a + c) <= b || (c + b) <= a) {
      throw new Error('Ooops');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * ((s - this.a) * (s - this.b) * (s - this.c)));

    return callback(area);
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Ooops');
    }
  }

  getArea(): number {
    return callback(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Ooops');
    }
  }

  getArea(): number {
    return callback(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
