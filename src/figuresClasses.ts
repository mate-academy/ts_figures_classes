enum FigureColor {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

enum FigureShape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: FigureShape,
  color: FigureColor,
  getArea(): number,
}

export class Triangle implements Figure {
  shape = FigureShape.Triangle;

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    switch (true) {
      case a <= 0:
      case b <= 0:
      case c <= 0:
        throw new Error(
          'One or more sides have a value less than or equal to 0',
        );

      case a + b <= c:
        throw new Error(
          `Side ${c} is smaller than the sum of sides ${a} and ${b}`,
        );
      case b + c <= a:
        throw new Error(
          `Side ${a} is smaller than the sum of sides ${b} and ${c}`,
        );
      case c + a <= b:
        throw new Error(
          `Side ${b} is smaller than the sum of sides ${a} and ${c}`,
        );

      default:
    }
  }

  getArea(): number {
    const semiP = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c),
    );

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = FigureShape.Circle;

  constructor(
    public color: FigureColor,
    public radius: number,

  ) {
    if (radius <= 0) {
      throw new Error(
        `Radius ${radius} can't form a circle`,
      );
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = FigureShape.Rectangle;

  constructor(
    public color: FigureColor,
    public height: number,
    public width: number,

  ) {
    if (height <= 0 || width <= 0) {
      throw new Error(
        `Sides ${height} and ${width} can't form a rectangle`,
      );
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return (
    `A ${figure.color} ${figure.shape} - ${figure.getArea()}`
  );
}
