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

function squareToHundreds(num: number): number {
  return Math.floor(num * 100) / 100;
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a < 0 || this.b < 0 || this.c < 0) {
      throw new Error('Invalid side');
    }

    if (a >= b + c || b >= a + c || c >= b + a) {
      throw new Error('This is not triangle');
    }
  }

  getArea(): number {
    const half = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(half * (half - this.a)
      * (half - this.b) * (half - this.c));

    return squareToHundreds(area);
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius < 0) {
      throw new Error('This is not circle');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return squareToHundreds(area);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width < 0 || this.height < 0) {
      throw new Error('This is not rectagle');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return squareToHundreds(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
