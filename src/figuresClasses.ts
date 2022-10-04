enum Shape {
  Triangle ='triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green'| 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
  checkSides(): void;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.checkSides();
  }

  getArea(): number {
    const perimeter = (this.a + this.b + this.c) / 2;

    return Math.round(
      Math.sqrt(perimeter
      * (perimeter - this.a)
      * (perimeter - this.b)
      * (perimeter - this.c))
      * 100,
    ) / 100;
  }

  checkSides(): void {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Triangle side length <= 0');
    }

    if (
      this.a >= this.b + this.c
      || this.b >= this.a + this.c
      || this.c >= this.a + this.b
    ) {
      throw new Error('The longest side of a triangle'
      + 'is >= than a sum of two others');
    }
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.checkSides();
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }

  checkSides(): void {
    if (this.radius <= 0) {
      throw new Error('Circle radius length <= 0');
    }
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    this.checkSides();
  }

  getArea(): number {
    return Math.round(this.a * this.b * 100) / 100;
  }

  checkSides(): void {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('Rectangle side length <= 0');
    }
  }
}

export function getInfo(figure:Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
