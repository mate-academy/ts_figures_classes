
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  public color: Color;

  public a: number;

  public b: number;

  public c: number;

  constructor(
    color: Color,
    a: number,
    b: number,
    c: number,
  ) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    const sidesArr = [a, b, c];

    sidesArr.sort((x:number, y:number):number => (x > y ? -1 : 1));

    if (sidesArr[0]
      >= (sidesArr.reduce((x:number, y:number) => x + y, 0) - sidesArr[0])) {
      throw new Error('your error message');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('your error message');
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
  public shape: Shape = 'circle';

  public color: Color;

  public radius: number;

  constructor(
    color: Color,
    radius:number,
  ) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea():number {
    return +((this.radius * this.radius) * (Math.PI)).toFixed(2);
  }
}

export class Rectangle {
  public shape: Shape = 'rectangle';

  public color: Color;

  public height: number;

  public width: number;

  constructor(
    color: Color,
    height: number,
    width: number,
  ) {
    this.color = color;
    this.height = height;
    this.width = width;

    if (height <= 0 || width <= 0) {
      throw new Error('your error message');
    }
  }

  getArea():number {
    return +(this.height * this.width).toFixed(2);
  }
}

export function getInfo(figure : Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
