type Colors = 'red' | 'green' | 'blue';

enum Shapes {
  triangle,
  circle,
  rectangle,
}

export interface Figure {
  shape?: Shapes;
  color: Colors;
}

export class Triangle implements Figure {
  public shape: Shapes = Shapes.triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Invalid data');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(s
       * (s - this.a) * (s - this.b) * (s - this.c)) * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shapes = Shapes.circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid data');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shapes = Shapes.rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid data');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string | undefined {
  if (figure instanceof Rectangle) {
    const area: number = figure.getArea();

    return `A ${figure.color} rectangle - ${area}`;
  }

  if (figure instanceof Circle) {
    const area: number = figure.getArea();

    return `A ${figure.color} circle - ${area}`;
  }

  if (figure instanceof Triangle) {
    const area: number = figure.getArea();

    return `A ${figure.color} triangle - ${area}`;
  }

  return undefined;
}
