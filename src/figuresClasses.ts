export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
}

export class Triangle implements Figure {
  public a: number;

  public b: number;

  public c: number;

  constructor(
    public shape: Figure['shape'],
    public color: Figure['color'],
    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('error message');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
  }
}

export class Circle implements Figure {
  public radius: number;

  constructor(
    public shape: Figure['shape'],
    public color: Figure['color'],
    radius: number,
  ) {
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('error message');
    }
  }

  // getArea(): number {
  //   return Math.PI * this.radius * this.radius;
  // }
}

export class Rectangle {
  public width: number;

  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure) {

};
