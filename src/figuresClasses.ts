enum FigureShape {
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
  shape: FigureShape;
  color: FigureColor;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape = FigureShape.Triangle;

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const isNotTraingle1 = a <= 0 || b <= 0 || c <= 0;
    const isNotTraingle2 = a + b <= c || a + c <= b || b + c <= a;

    if (isNotTraingle1 || isNotTraingle2) {
      throw new Error(
        `sides ${this.a}, ${this.b} and ${this.c} can't form a triangle`,
      );
    }
  }

  getArea = (): number => {
    const s = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  };
}

export class Circle implements Figure {
  public shape = FigureShape.Circle;

  constructor(
    public color: FigureColor,
    public circle: number,
  ) {
    if (circle < 0) {
      throw new Error(
        `Value must be greater than ${circle}`,
      );
    }
  }

  getArea = (): number => {
    return Math.floor((Math.PI * (this.circle * this.circle)) * 100) / 100;
  };
}

export class Rectangle implements Figure {
  public shape = FigureShape.Rectangle;

  constructor(
    public color: FigureColor,
    public width: number,
    public height: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error(`${width} and ${height} must be greater than 0`);
    }
  }

  getArea = (): number => {
    return Math.floor((this.width * this.height) * 100) / 100;
  };
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
