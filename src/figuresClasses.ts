type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
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
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Incorrect input values');
    }

    if ((a + b <= c) || (a + c <= b) || (b + c <= a)) {
      throw new Error("Can't built triangle");
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const p = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.round(100 * p) / 100;
  }
}

export class Circle {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Incorrect input values');
    }
  }

  getArea(): number {
    return Math.round(100 * (3.14 * (this.radius ** 2))) / 100;
  }
}

export class Rectangle {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if ((width <= 0) || (height <= 0)) {
      throw new Error('Incorrect input values');
    }
  }

  getArea(): number {
    return Math.round(100 * (this.height * this.width)) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
