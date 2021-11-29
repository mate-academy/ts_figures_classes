enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

enum Color {
  red = 'red',
  green = 'green',
  blue = 'blue'
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape:Shape = Shape.triangle;

  constructor(
    public color: Color,
    public a:number,
    public b:number,
    public c:number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Any sides cannot be less or equal 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('One side cannot be bigger than the sum of other');
    }
  }

  getArea():number {
    const s:number = (this.a + this.b + this.c) / 2;
    const r:number = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(r * 100) / 100;
  }
}

export class Circle implements Figure {
  shape:Shape = Shape.circle;

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('Radius cannot be less or equal 0');
    }
  }

  getArea():number {
    const r:number = Math.PI * this.radius * this.radius;

    return Math.floor(r * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape:Shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Any sides cannot be less or equal 0');
    }
  }

  getArea():number {
    const r = this.width * this.height;

    return Math.floor(r * 100) / 100;
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
