
enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ((c >= a + b || b >= a + c || a >= b + c) || (!a || !b || !c)) {
      throw new Error('Can`t form a triangle');
    }
  }

  getArea(): number {
    const area: number = (this.a + this.b + this.c) / 2;
    const result = Math.sqrt(area * (area - this.a)
     * (area - this.b) * (area - this.c));

    return Math.round(result * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius can`t be zero');
    }
  }

  getArea(): number {
    const result = Math.PI * (this.radius ** 2);

    return Math.floor(result * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Sides can`t be zero');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
