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

function roundNumber(area: number): number {
  return Math.floor((area) * 100) / 100;
}

function checkSideLength(...sides: number[]): void {
  if (sides.some((side) => side <= 0)) {
    throw new Error('Side can not be less/equal to zero');
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
    checkSideLength(a, b, c);

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid input values');
    }
  }

  getArea(): number {
    const { a, b, c } = this;
    const halfPerimeter = (a + b + c) / 2;

    const area = Math.sqrt(halfPerimeter
      * (halfPerimeter - a)
      * (halfPerimeter - b)
      * (halfPerimeter - c));

    return roundNumber(area);
  }
}

export class Circle implements Figure {
  readonly shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius can not be less/equal to zero');
    }
  }

  getArea(): number {
    const area = (Math.PI * (this.radius ** 2));

    return roundNumber(area);
  }
}

export class Rectangle {
  readonly shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    checkSideLength(width, height);
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundNumber(area);
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
