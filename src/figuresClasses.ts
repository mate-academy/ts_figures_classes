
enum ShapeType {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum FigureColor {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: ShapeType;
  color: FigureColor;
  getArea():number;
}

export class Triangle implements Figure {
  public shape = ShapeType.Triangle;

  constructor(
    public color:FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.b + this.c <= this.a
    ) {
      throw new Error(`sides ${this.a}, ${this.b} and ${this.c}`
        + 'cant form a triangle');
    }
  }

  getArea():number {
    const halfPerimeter = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(
      halfPerimeter
      * (halfPerimeter - this.a)
      * (halfPerimeter - this.b)
      * (halfPerimeter - this.c),
    ).toFixed(2);
  }
}

export class Circle implements Figure {
  public shape = ShapeType.Circle;

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return +(3.14 * (this.radius ** 2)).toFixed(2);
  }
}

export class Rectangle implements Figure {
  public shape = ShapeType.Rectangle;

  constructor(
    public color: FigureColor,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
