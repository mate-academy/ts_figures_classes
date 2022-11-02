type Color = 'red'|'green'|'blue';
enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

export interface Figure {
  shape: Shape
  color: Color
  getArea():number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public c: number,
    public b: number,
  ) {
    const longestSide = Math.max(a, b, c);
    const otherSides = a + b + c - longestSide;
    const notZero = a > 0 && b > 0 && c > 0;

    if (longestSide >= otherSides || !notZero) {
      throw new Error('your error message');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const sum : number = (this.a + this.b + this.c) / 2;

    const area
      = Math.sqrt(sum * (sum - this.a) * (sum - this.b) * (sum - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius < 0) {
      throw new Error('errr');
    }
  }

  getArea(): number {
    const area = (Math.PI * (this.radius ** 2));

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.rectangle;

  constructor(
    public color: Color,
    public height: number,
    public width: number,
  ) {
    if (height <= 0 || width <= 0) {
      throw new Error('your error');
    }

    this.height = height;
    this.width = width;
  }

  getArea(): number {
    const area = (this.height * this.width);

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
