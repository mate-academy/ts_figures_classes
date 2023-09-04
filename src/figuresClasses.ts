
enum Shape {
  Triangle = 'triangle',
  Rectangle = 'rectangle',
  Circle = 'circle',
}

export interface Figure {
  shape: Shape;
  color: 'red' | 'green' | 'blue',

  getArea: () => number;
}

export class Triangle implements Figure {
  public shape = Shape.Triangle;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('wrong length specified');
    }

    if ((a + b) <= c || (b + c) <= a || (c + a) <= b) {
      throw new Error('wrong length specified');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape = Shape.Circle;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('wrong length specified');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.trunc(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape = Shape.Rectangle;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('wrong length specified');
    }
  }

  getArea(): number {
    const area = this.height * this.width;

    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
