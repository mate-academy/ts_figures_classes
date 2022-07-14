enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape:Shape,
  color:string,
  getArea():number,
}

export class Triangle implements Figure {
  a:number;

  b:number;

  c:number;

  shape:Shape;

  color:Color;

  constructor(
    color:Color,
    a:number,
    b:number,
    c:number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Zero value argument');
    }

    if (Math.max(a, b, c) >= (a + b + c - Math.max(a, b, c))) {
      throw new Error('Invalid triangle sides');
    }

    this.shape = Shape.triangle;
    this.color = color;

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea():number {
    const p = (this.a + this.b + this.c) / 2;

    return +Math
      .sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(2);
  }
}

export class Circle {
  radius:number;

  shape:Shape;

  color:Color;

  constructor(color:Color, radius:number) {
    if (radius <= 0) {
      throw new Error('Zero value argument');
    }

    this.shape = Shape.circle;
    this.color = color;
    this.radius = radius;
  }

  getArea():number {
    const area = (this.radius ** 2) * Math.PI;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  width:number;

  height:number;

  shape:Shape;

  color:Color;

  constructor(
    color:Color,
    width:number,
    height:number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Zero value argument');
    }

    this.shape = Shape.rectangle;
    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea():number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
