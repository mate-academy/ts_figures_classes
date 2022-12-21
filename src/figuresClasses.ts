enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
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
    if (this.isInvalidTriangel()) {
      throw new Error('You can\'t build triangle with these sides sizes');
    }
  }

  private isInvalidTriangel(): boolean {
    const { a, b, c } = this;
    const checks = [
      a <= 0,
      b <= 0,
      c <= 0,
      a >= b + c,
      b >= a + c,
      c >= a + b,
    ];

    return checks.some(Boolean);
  }

  getArea(): number {
    const { a, b, c } = this;
    const SemiPer = (a + b + c) / 2;

    const area = Math.sqrt(
      SemiPer * (SemiPer - a) * (SemiPer - b) * (SemiPer - c),
    );

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.isInvalidCircle()) {
      throw new Error('Radius of circle must be > 0');
    }
  }

  private isInvalidCircle(): boolean {
    return this.radius <= 0;
  }

  getArea(): number {
    const area = Math.PI * (this.radius * this.radius);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width : number,
    public height : number,
  ) {
    if (this.isInvalidRectangle()) {
      throw new Error('You can\'t build rectangle with these sides sizes');
    }
  }

  private isInvalidRectangle(): boolean {
    return this.width <= 0 || this.height <= 0;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
