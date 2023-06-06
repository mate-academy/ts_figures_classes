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
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!this.isValidTriangle()) {
      throw new Error(
        `Sides ${this.a}, ${this.b} and ${this.c} cannot form a triangle`,
      );
    }
  }

  isValidTriangle(): boolean {
    const { a, b, c } = this;

    return a > 0
      && b > 0
      && c > 0
      && a < b + c
      && b < a + c
      && c < a + b;
  }

  getArea(): number {
    const { a, b, c } = this;

    const s: number = (a + b + c) / 2;
    const area: number = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (!this.isValidCircle()) {
      throw new Error(
        `Radius ${this.radius} cannot form a circle`,
      );
    }
  }

  isValidCircle(): boolean {
    return this.radius > 0;
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (!this.isValidRectangle()) {
      throw new Error(
        `Width ${this.width} and height ${this.height} cannot form a rectangle`,
      );
    }
  }

  isValidRectangle(): boolean {
    const { width, height } = this;

    return width > 0 && height > 0;
  }

  getArea(): number {
    const { width, height } = this;

    const area = width * height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
