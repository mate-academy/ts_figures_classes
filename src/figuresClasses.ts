type Color = 'red' | 'blue' | 'green';

enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Error, expected numeric type');
    }

    if (this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.b + this.c <= this.a) {
      throw new Error('sides 1, 2 and 3 can not form a triangle');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const areaTriangle
    = (p * ((p - this.a) * (p - this.b) * (p - this.c))) ** (1 / 2);

    return Math.round(areaTriangle * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public r: number,
  ) {
    if (this.r <= 0) {
      throw new Error('Error, expected positive integer');
    }
  }

  getArea(): number {
    const numberP: number = 3.14;
    const areaCircle = numberP * (this.r ** 2);

    return Math.round(areaCircle * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('Error, expected positive integer');
    }
  }

  getArea(): number {
    const areaRectangle = this.a * this.b;

    return Math.round(areaRectangle * 100) / 100;
  }
}
