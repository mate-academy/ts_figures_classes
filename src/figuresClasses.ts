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
  shape: Shape,
  color: Color,
  getArea(): number,
}

function round(area: number): number {
  return Math.floor((area) * 100) / 100;
}

function findSide(...sides: number[]): void {
  if (sides.some((side) => side <= 0)) {
    throw new Error('Side can not be 0 or less');
  }
}

export class Triangle implements Figure {
  readonly shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    findSide(a, b, c);

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid data');
    }
  }

  getArea(): number {
    const halfOfPerimeter = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(halfOfPerimeter
      * (halfOfPerimeter - this.a)
      * (halfOfPerimeter - this.b)
      * (halfOfPerimeter - this.c));

    return round(area);
  }
}

export class Circle implements Figure {
  readonly shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius can not be 0 or less');
    }
  }

  getArea(): number {
    const area = (Math.PI * (this.radius ** 2));

    return round(area);
  }
}

export class Rectangle {
  readonly shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    findSide(width, height);
  }

  getArea(): number {
    const area = this.width * this.height;

    return round(area);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
