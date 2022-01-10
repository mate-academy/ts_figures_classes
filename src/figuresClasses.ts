
type FigureColors = 'red' | 'green' | 'blue';
enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export interface Figure {
  shape: Shape;
  color: FigureColors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  constructor(
    public color: FigureColors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('one of the sides cannot be <= 0');
    }

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(s * (s - this.a)
      * (s - this.b) * (s - this.c)).toFixed(2));
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: FigureColors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('circle radius cannot be <= 0');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle {
  shape = Shape.Rectangle;

  constructor(
    public color: FigureColors,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Width/height cannot be <= 0');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
