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
  public shape: Shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (c >= a + b || b >= a + c || a >= b + c) {
      throw new Error(`The longest side of a triangle 
        shouldn't be less than a sum of two others`);
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The figure`s values should be more than 0');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const aDiff = s - this.a;
    const bDiff = s - this.b;
    const cDiff = s - this.c;

    return Math.round(Math.sqrt(s * aDiff * bDiff * cDiff) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.circle;

  constructor(public color: Color, public radius: number) {
    if (radius <= 0) {
      throw new Error('Error. The radius is less than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Error. One of sids is less than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
