export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

enum Shapes {
  Triangle = 'triangle',
  Rectangle = 'rectangle',
  Circle = 'circle',
}

export class Triangle implements Figure {
  public shape: string;

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = Shapes.Triangle;

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid triangle sides value');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle sides value');
    }
  }

  getArea(): number {
    const semPer: number = (this.a + this.b + this.c) * 0.5;

    return (
      Math.floor(
        Math.sqrt(
          semPer * (semPer - this.a) * (semPer - this.b) * (semPer - this.c),
        ) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  public shape: string;

  constructor(
    public color: string,
    public radius: number,
  ) {
    this.shape = Shapes.Circle;

    if (radius <= 0) {
      throw new Error('Invalid circle radius');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: string;

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    this.shape = Shapes.Rectangle;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error(`Invalid Rectangle size values`);
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
