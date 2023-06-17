
enum Shape {
  triangle = 'triangle', circle = 'circle', rectangle = 'rectangle'
}
type Color = 'red' | 'blue' | 'green';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sidesArr = [a, b, c];

    sidesArr.sort((x:number, y:number):number => (x > y ? -1 : 1));

    if (sidesArr[0]
      >= (sidesArr.reduce((x:number, y:number) => x + y, 0) - sidesArr[0])) {
      throw new Error('The biggest side should be <= than sum of two other');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side can\'t be <= 0');
    }
  }

  getArea():number {
    const semiPer = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(semiPer
      * (semiPer - this.a)
      * (semiPer - this.b)
      * (semiPer - this.c))).toFixed(2);
  }
}

export class Circle {
  public shape: Shape = Shape.circle;

  constructor(
    public color: Color,
    public radius:number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius can\'t be <= 0');
    }
  }

  getArea():number {
    return +((this.radius * this.radius) * (Math.PI)).toFixed(2);
  }
}

export class Rectangle {
  public shape: Shape = Shape.rectangle;

  constructor(
    public color: Color,
    public height: number,
    public width: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('Side can\'t be <= 0');
    }
  }

  getArea():number {
    return +(this.height * this.width).toFixed(2);
  }
}

export function getInfo(figure : Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
