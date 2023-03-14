type Shape = 'triangle' | 'circle' | 'rectangle';

enum Color {
  'red',
  'green',
  'blue'
}

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
    const max = Math.max(a, b, c);

    if (max >= (a + b + c - max) || a <= 0 || b <= 0 || c <= 0) {
      throw new Error(`Error: sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(semiPerimeter * (semiPerimeter - this.a)
    * (semiPerimeter - this.b) * (semiPerimeter - this.c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error(`Error: radius ${radius} can't form a circle`);
    }
  }

  getArea(): number {
    const area = (Math.floor(Math.PI * this.radius ** 2 * 100)) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error(
        `Error: sides ${width} and ${height} can't form a rectangle`,
      );
    }
  }

  getArea(): number {
    const area = +(this.width * this.height).toFixed(2);

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
