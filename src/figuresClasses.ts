export interface Figure {
  color: string;
  shape: string;

  getArea(): number;
}

function round(expression: number): number {
  return Math.floor(expression * 100) / 100;
}

enum ShapeFigure {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

enum ColorFigure {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

export class Triangle implements Figure {
  shape = ShapeFigure.Triangle;

  constructor(
    public color: ColorFigure,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (this.b <= 0
      || this.c <= 0
      || this.a <= 0
      || this.c >= this.a + this.b
      || this.a >= this.c + this.b
      || this.b >= this.a + this.c
    ) {
      throw new Error('You got the numbers wrong');
    }
  }

  getArea(): number {
    return round(1 / 4 * Math.sqrt((this.b + this.c - this.a)
       * (this.a + this.b + this.c)
       * (this.a - this.b + this.c)
       * (this.a + this.b - this.c)));
  }
}

export class Circle implements Figure {
  shape = ShapeFigure.Circle;

  constructor(
    public color: ColorFigure,
    public radius: number,

  ) {
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('You got the numbers wrong');
    }
  }

  getArea(): number {
    return round((Math.PI * this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  shape = ShapeFigure.Rectangle;

  constructor(
    public color: ColorFigure,
    public width: number,
    public height: number,
  ) {
    this.width = width;
    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('You got the numbers wrong');
    }
  }

  getArea(): number {
    return round(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return (`A ${figure.color} ${figure.shape} - ${figure.getArea()}`);
}
