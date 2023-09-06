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

function roundArea(area: number): number {
  return Math.trunc(area * 100) / 100;
}

export class Triangle implements Figure {
  public shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid triangle: Sides must be greater than 0.');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid circle:'
      + 'Triangle inequality theorem not satisfied.');
    }
  }

  getArea(): number {
    const semiPerimetr = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiPerimetr
      * (semiPerimetr - this.a)
      * (semiPerimetr - this.b)
      * (semiPerimetr - this.c),
    );

    return roundArea(area);
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
    const area = Math.PI * this.radius ** 2;

    return roundArea(area);
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
      throw new Error('Invalid rectangle:'
      + 'width and height must be greater than 0.');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundArea(area);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;
  const getArea = figure.getArea();

  return `A ${color} ${shape} - ${getArea}`;
}
