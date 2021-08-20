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
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = ShapeType.Triangle;

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = ShapeType.Triangle;
  }

  getArea(): number {
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
  public shape;

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    this.shape = ShapeType.Circle;
  }

  getArea(): number {
    return +(3.14 * (this.radius ** 2)).toFixed(2);
  }
}

export class Rectangle implements Figure {
  public shape;

  constructor(
    public color: FigureColor,
    public width: number,
    public heigh: number,
  ) {
    this.shape = ShapeType.Rectangle;
  }

  getArea(): number {
    return +(this.width * this.heigh).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
