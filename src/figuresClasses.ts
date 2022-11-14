export interface Figure {
  shape: string;
  color: string;

  getArea(): number;
}

type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';
type Geometry = number;

export class Triangle implements Figure {
  shape: string = 'triangle';

  constructor(
    public color : Color,

    public a: Geometry,
    public b: Geometry,
    public c: Geometry,
  ) {
    const isTriangle: boolean = a + b + c - Math.max(a, b, c) * 2 <= 0;

    if (isTriangle) {
      throw new Error('Not a triangle. Check sides');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Each side should be a positive number');
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const halfOfPerimeter = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(halfOfPerimeter
      * (halfOfPerimeter - this.a)
      * (halfOfPerimeter - this.b)
      * (halfOfPerimeter - this.c));

    return Math.floor((square * 100)) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: Geometry,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be a positive number');
    }

    this.radius = radius;
  }

  getArea(): number {
    const square: number = Math.PI * this.radius ** 2;

    return Math.floor((square * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: Geometry,
    public height: Geometry,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Each side should be a positive number');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
