enum FigureShape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

enum FigureColor {
  red = 'red',
  green = 'green',
  blue = 'blue',
}

export interface Figure {
  color: FigureColor;
  shape: FigureShape;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = FigureShape.triangle;

  constructor(
    public color: FigureColor,
    public A: number,
    public B: number,
    public C: number,
  ) {
    if (this.A <= 0 || this.B <= 0 || this.C <= 0) {
      throw new Error('error');
    }

    if (this.A + this.B <= this.C
      || this.B + this.C <= this.A
      || this.C + this.A <= this.B) {
      throw new Error('error');
    }
  }

  getArea():number {
    const s: number = (this.A + this.B + this.C) / 2;

    return Math.sqrt(s * (s - this.A) * (s - this.B) * (s - this.C));
  }
}

export class Circle implements Figure {
  shape = FigureShape.circle;

  constructor(
    public color: FigureColor,
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error('error');
    }
  }

  getArea(): number {
    return 3.14 * (this.r ** 2);
  }
}

export class Rectangle {
  shape = FigureShape.rectangle;

  constructor(
    public color: FigureColor,
    public sideA: number,
    public sideB: number,
  ) {
    if (sideA <= 0 || sideB <= 0) {
      throw new Error('error');
    }
  }

  getArea(): number {
    return this.sideA * this.sideB;
  }
}

export function getInfo(figure: Figure): String {
  return `A ${figure.color} ${figure.shape} - ${+figure.getArea().toFixed(2)}`;
}
