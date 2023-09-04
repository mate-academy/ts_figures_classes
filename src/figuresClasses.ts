enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('side cannot be less than or equal to zero');
    }

    const maxSide: number = Math.max(this.a, this.b, this.c);
    const sumTwoSide : number = this.a + this.b + this.c - maxSide;

    if (maxSide >= sumTwoSide) {
      throw new
      Error(`sides ${this.a}, ${this.b} and ${this.c} can't form a triangle`);
    }
  }

  getArea() : number {
    const s = 0.5 * (this.a + this.b + this.c);

    return (Math.floor((Math.sqrt(s * (s - this.a) * (s
      - this.b) * (s - this.c))) * 100)) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('side cannot be less than or equal to zero');
    }
  }

  getArea() : number {
    return (Math.floor(Math.PI * this.radius * this.radius * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('side cannot be less than or equal to zero');
    }
  }

  getArea() : number {
    return this.width * this.height;
  }
}

export function getInfo(figure :Figure): string {
  const { shape, color } = figure;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
