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

interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle: Sides do not form a valid triangle.');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = (Math.sqrt(
      s
      * (s - this.a)
      * (s - this.b)
      * (s - this.c),
    )).toFixed(2);

    return +area;
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid circle: Radius must be greater than 0.');
    }
  }

  getArea(): number {
    const area = (Math.PI * this.radius ** 2).toFixed(2);

    return +area;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle: w and h must be greater than 0.');
    }
  }

  getArea(): number {
    const area = (this.width * this.height).toFixed(2);

    return +area;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;
  const getArea = figure.getArea();

  return `A ${color} ${shape} - ${getArea}`;
}
