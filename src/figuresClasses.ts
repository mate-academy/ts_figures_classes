
enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

enum Colors {
  red = 'red',
  green = 'green',
  blue = 'blue'
}

export interface Figure {
  shape: Shapes,
  color: Colors,
  getArea():number
}

export class Triangle implements Figure {
  public shape = Shapes.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0
      || a + b <= c
      || b + c <= a
      || c + a <= b
    ) {
      throw new Error('not valid sides');
    }
  }

  getArea(): number {
    const semiPerimetr = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiPerimetr * (semiPerimetr - this.a)
      * (semiPerimetr - this.b) * (semiPerimetr - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = Shapes.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('not valid radius');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shapes.Rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('not valid width and height');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
