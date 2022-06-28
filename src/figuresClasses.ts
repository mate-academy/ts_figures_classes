type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape,
  color: Color,

  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('ALl the sides must be positive integers');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Sum of 2 sides must always be bigger then 3 one');
    }

    this.shape = 'triangle';
    this.color = color;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
      .toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be positive integer');
    }
    this.radius = radius;
    this.shape = 'circle';
  }

  getArea(): number {
    return +(Math.floor((Math.PI * this.radius ** 2) * 100) / 100);
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Both sides must be positive integers');
    }
    this.width = width;
    this.height = height;
    this.shape = 'rectangle';
  }

  getArea(): number {
    return +((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Circle | Rectangle | Triangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
