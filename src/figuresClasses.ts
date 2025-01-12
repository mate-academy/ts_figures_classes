type Shape = 'triangle' | 'circle' | 'rectangle';

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';
  color: Color;
  private a: number;
  private b: number;
  private c: number;
  static isInvalidTriangle(a: number, b: number, c: number): boolean {
    return a >= b + c || b >= a + c || c >= a + b;
  }
  constructor(color: Color, a: number, b: number, c: number) {
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;

    const isInvalid = Triangle.isInvalidTriangle(a, b, c);

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Error. A side must be > 0');
    } else if (isInvalid) {
      throw new Error("Error. sides 1, 2 and 3 can't form a triangle");
    }
  }
  public getArea(): number {
    const { a, b, c } = this;
    let halfS = (a + b + c) / 2;
    const S = Math.sqrt(halfS * (halfS - a) * (halfS - b) * (halfS - c));
    return Math.round(S * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';
  color: Color;
  private radius: number;

  constructor(color: Color, radius: number) {
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Error. Radius must be > 0');
    }
  }

  public getArea(): number {
    const area = Math.PI * this.radius * this.radius;
    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';
  color: Color;
  private width: number;
  private height: number;

  constructor(color: Color, width: number, height: number) {
    this.color = color;
    this.width = width;
    this.height = height;
    if (width <= 0 || height <= 0) {
      throw new Error('Error. A side must be > 0');
    }
  }

  public getArea(): number {
    const width = this.width;
    const height = this.height;
    return width * height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
