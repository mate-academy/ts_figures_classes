type Color = 'red'| 'green' | 'blue';
enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  color: Color;
  shape: Shape;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw Error('0 or a negative number is passed to a constructor');
    }

    if (this.a >= this.b + this.c
    || this.b >= this.a + this.c
    || this.c >= this.a + this.b) {
      throw Error('Passed lengths dont form a triangle');
    }
  }

  getArea():number {
    const semiperimeter: number = (this.a + this.b + this.c) / 2;

    return Number(
      Math.sqrt(
        semiperimeter
        * (semiperimeter - this.a)
        * (semiperimeter - this.b)
        * (semiperimeter - this.c),
      )
        .toFixed(2),
    );
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw Error('0 or a negative number is passed to a constructor');
    }
  }

  getArea():number {
    return Number((3.14 * (this.radius ** 2)).toFixed(2));
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public heigth: number,
  ) {
    if (this.width <= 0 || this.heigth <= 0) {
      throw Error('0 or a negative number is passed to a constructor');
    }
  }

  getArea():number {
    return Number((this.width * this.heigth).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
