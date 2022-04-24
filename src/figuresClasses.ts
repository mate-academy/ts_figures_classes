enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

enum Colors {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = Shapes.Triangle;

  public getArea(): number {
    const halPerimeter = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(
      halPerimeter * (halPerimeter - this.a)
      * (halPerimeter - this.b)
      * (halPerimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ([a, b, c].some((args) => args <= 0)) {
      throw new Error('Incorrect values');
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error('Not triangle');
    }
  }
}

export class Circle {
  public shape = Shapes.Circle;

  public getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Incorrect values');
    }
  }
}

export class Rectangle {
  public shape = Shapes.Rectangle;

  public getArea(): number {
    return Math.floor(this.h * this.w);
  }

  constructor(
    public color: Colors,
    public w: number,
    public h: number,
  ) {
    if (w <= 0 || h <= 0) {
      throw new Error('Incorrect values');
    }
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
