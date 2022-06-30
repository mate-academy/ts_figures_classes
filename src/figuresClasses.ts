type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'blue' | 'green';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  area: number;

  getArea(): number {
    return this.area;
  }

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      a <= 0
      || b <= 0
      || c <= 0
    ) {
      throw new Error('Triangle must have positive sides.');
    }

    if (
      a >= b + c
      || b >= a + c
      || c >= a + b
    ) {
      throw new Error(
        'Each side of triangle must be less than sum of two others.',
      );
    }

    const halfPerimeter = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(
      halfPerimeter
      * (halfPerimeter - this.a)
      * (halfPerimeter - this.b)
      * (halfPerimeter - this.c),
    );

    this.area = Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  area: number;

  getArea(): number {
    return this.area;
  }

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle must have positive radius.');
    }

    this.area = Math.floor((Math.PI * (this.radius ** 2) * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  area: number;

  getArea(): number {
    return this.area;
  }

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle must have positive width and height.');
    }

    this.area = Math.floor((this.width * this.height * 100)) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
