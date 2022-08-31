
type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'

}

export interface Figure {
  shape: Shape,
  color: Color,

  getArea(): number
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Enter all sides greater than zero');
    } else if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error('The longest side is greater'
      + 'than or equal to the sum of the other two');
    }
  }

  getArea(): number {
    const perimeter = (this.a + this.b + this.c) / 2;

    const area = +Math.sqrt(perimeter
      * ((perimeter - this.a)
      * (perimeter - this.b)
      * (perimeter - this.c)))
      .toFixed(2);

    return area;
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Enter radius greater than zero');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Enter height and width greater than zero');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
