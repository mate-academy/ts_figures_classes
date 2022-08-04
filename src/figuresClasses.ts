enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}
type Color = 'red'|'green'|'blue';
export interface Figure {
  shape:Shape;
  color:Color;
  getArea():number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const max = Math.max(a, b, c);
    const sum = a + b + c;

    if (max >= sum - max) {
      throw new Error('error message');
    }

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('error message');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    const roundAria = Math.floor(area * 100) / 100;

    return roundAria;
  }
}

export class Circle {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('error message');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;
    const roundAria = Math.floor(area * 100) / 100;

    return roundAria;
  }
}

export class Rectangle {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,

    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('error message');
    }
  }

  getArea(): number {
    const area = this.width * this.height;
    const roundAria = Math.floor(area * 100) / 100;

    return roundAria;
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
