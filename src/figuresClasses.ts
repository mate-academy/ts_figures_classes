
export enum Color {
  red,
  green,
  blue,
}

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure{
  color: Color
  shape: Shape
  getArea(): number
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(public color: Color,
    public a: number, public b: number, public c: number) {
    if (a <= 0 || b <= 0 || c <= 0
       || (a + b <= c && c > a && c > b)
       || (a > b && a > c && (b + c) <= a)
       || (a < b && c < b && a + c <= b)) {
      throw new Error('Values are not valid');
    }

    this.shape = Shape.triangle;
  }

  getArea(): number {
    const s: number = 0.5 * (this.a + this.b + this.c);
    const v: number = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.round(v * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(public color: Color,
    public radius: number) {
    if (radius <= 0) {
      throw new Error('Values are not valid');
    }
    this.shape = Shape.circle;
  }

  getArea(): number {
    const s:number = Math.PI * this.radius * this.radius;

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(public color: Color,
    public width: number,
    public height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Values are not valid');
    }
    this.shape = Shape.rectangle;
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}

// || a + b < c || b + c < a
//       || a + c < b
