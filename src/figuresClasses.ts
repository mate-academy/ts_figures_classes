type Color = 'red' | 'green' | 'blue';

enum Shapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}
export interface Figure{
  shape: Shapes;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shapes = Shapes.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('your error message');
    }

    const max = Math.max(this.a, this.b, this.c);

    if (max >= this.a + this.b + this.c - max) {
      throw new Error('your error message');
    }
  }

  getArea():number {
    const p = (this.a + this.b + this.c) / 2;
    const squareTriangle = Math.sqrt(p * (p - this.a)
* (p - this.b) * (p - this.c));

    return Math.floor(squareTriangle * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shapes = Shapes.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea():number {
    const squareCircle = Math.PI * this.radius * this.radius;

    return Math.floor(squareCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shapes = Shapes.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('your error message');
    }
  }

  getArea():number {
    const squareRectangle = this.width * this.height;

    return Math.floor(squareRectangle * 100) / 100;
  }
}

export function getInfo(figure: Figure):string {
  const str: string = `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;

  return str;
}
