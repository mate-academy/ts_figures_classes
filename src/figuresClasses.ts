export interface Figure {
  shape: string,
  color: string,
  getArea(): number,
}

type Color = 'red' | 'green' | 'blue';

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

function roundArea(number: number): number {
  return Math.floor(number * 100) / 100;
}

export class Triangle implements Figure {
  public shape = Shape.triangle;

  constructor(
    public color: Color = 'red',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides are not valid');
    }

    if (a + b <= c
      || b + c <= a
      || c + a <= b) {
      throw new Error('These sides cannot form a triangle');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const s: number = (a + b + c) / 2;

    const area: number = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return roundArea(area);
  }
}

export class Circle implements Figure {
  public shape = Shape.circle;

  constructor(
    public color: Color = 'green',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius is not valid');
    }
  }

  getArea(): number {
    const { radius } = this;
    const area = Math.PI * (radius ** 2);

    return roundArea(area);
  }
}

export class Rectangle implements Figure {
  public shape = Shape.rectangle;

  constructor(
    public color: Color = 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides are not valid');
    }
  }

  getArea(): number {
    const { width, height } = this;
    const area = width * height;

    return roundArea(area);
  }
}

export function getInfo(figure: Figure): string {
  const area: number = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
