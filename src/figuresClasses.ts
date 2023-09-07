type Color = 'red' | 'green' | 'blue';
enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export interface Figure {
  shape: Shape,
  color: Color,

  getArea(): number;
}

function getRoundFigureArea(value: number): number {
  return Math.floor(value * 100) / 100;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const sidesSum = this.a + this.b + this.c;
    const maxSide = Math.max(this.a, this.b, this.c);
    const sumTwoSmallerSides = sidesSum - maxSide;

    if (maxSide >= sumTwoSmallerSides) {
      throw new Error(`sides ${a}, ${b} and ${c} can not form a triangle`);
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('The side can not be less than zero');
    }
  }

  public getArea(): number {
    const sidesSum = this.a + this.b + this.c;
    const halfPerimeter = sidesSum / 2;

    const area = Math.sqrt(
      halfPerimeter
      * (halfPerimeter - this.a)
      * (halfPerimeter - this.b)
      * (halfPerimeter - this.c),
    );

    return getRoundFigureArea(area);
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius can not be less than zero');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return getRoundFigureArea(area);
  }
}

export class Rectangle {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('The side can not be less than zero');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  const figureArea = figure.getArea();
  const {
    color,
    shape,
  } = figure;

  return `A ${color} ${shape} - ${figureArea}`;
}
