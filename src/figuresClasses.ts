enum Figures {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Figures
  color: Color
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = Figures.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('sides must be a positive numbers');
    }

    if (this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.c + this.b <= this.a) {
      throw new Error(
        `sides ${this.a}, ${this.b} and ${this.c} can't form a triangle`,
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  public shape = Figures.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('radius must be a positive number');
    }
  }

  getArea(): number {
    const area = Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;

    return area;
  }
}

export class Rectangle {
  public shape = Figures.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('width & height must be a positive numbers');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
