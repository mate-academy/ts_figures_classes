enum FigureType {
  'triangle',
  'circle',
  'rectangle',
}

enum FigureColor {
  'red',
  'green',
  'blue',
}

export interface Figure {
  shape: FigureType;
  color: FigureColor;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: FigureType = FigureType.triangle;

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error();
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.floor((Math.sqrt(p * (p - this.a) * (p - this.b)
    * (p - this.c))) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: FigureType = FigureType.circle;

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    this.color = color;

    if (radius <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: FigureType = FigureType.rectangle;

  constructor(
    public color: FigureColor,
    public width: number,
    public height: number,
  ) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${FigureType[figure.shape]} - ${figure.getArea()}`;
}
