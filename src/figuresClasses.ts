type Colors = 'red' | 'green' | 'blue';

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('The side must be a positive number');
    }
  }

  getArea(): number {
    const halfOfPerimetre: number = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(halfOfPerimetre * (halfOfPerimetre - this.a)
     * (halfOfPerimetre - this.b) * (halfOfPerimetre - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('The side must be a positive number');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string | undefined {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
