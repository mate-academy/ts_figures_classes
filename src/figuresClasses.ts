enum FigureName {
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
  shape: FigureName,
  color: FigureColor,
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: FigureName = FigureName.triangle;

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const param: number[] = [a, b, c].sort((x: number, y: number) => {
      return y - x;
    });

    if (
      param[0] - param[1] - param[2] >= 0
      || param[0] <= 0
      || param[1] <= 0
      || param[2] <= 0
    ) {
      throw new Error('Not valid value');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const s: number = (a + b + c) / 2;
    const result: number = s * (s - a) * (s - b) * (s - c);

    return Math.floor((Math.sqrt(result)) * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape: FigureName = FigureName.circle;

  constructor(
    public color: FigureColor,
    public r: number,
  ) {
    if (this.r <= 0) {
      throw new Error('Not valid value');
    }
  }

  getArea(): number {
    const { r } = this;

    return Math.floor((Math.PI * (r * r)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape: FigureName = FigureName.rectangle;

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('Not valid value');
    }
  }

  getArea(): number {
    const { a, b } = this;

    return Math.floor((a * b) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const { shape, color } = figure;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
