type Color = 'red' | 'green' | 'blue';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const invalidConditions = [
      a <= 0
      || b <= 0
      || c <= 0
      || a + b <= c
      || b + c <= a
      || a + c <= b,
    ];
    const isIvalidTriangle = invalidConditions.some(Boolean);

    if (isIvalidTriangle) {
      throw new Error('invalid sides of triangle');
    }
  }

  getArea(): number {
    const semiperimeterTriangle = 0.5 * (this.a + this.b + this.c);
    const areaTriangle = Math.floor(
      Math.sqrt(
        semiperimeterTriangle * (semiperimeterTriangle - this.a)
        * (semiperimeterTriangle - this.b)
        * (semiperimeterTriangle - this.c),
      ) * 100,
    ) / 100;

    return areaTriangle;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('invalid circle radius');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public wigth: number,
    public height: number,
  ) {
    if (wigth <= 0 || height <= 0) {
      throw new Error('invalid sides of rectangle');
    }
  }

  getArea(): number {
    return this.wigth * this.height;
  }
}

export function getInfo(figure:Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
