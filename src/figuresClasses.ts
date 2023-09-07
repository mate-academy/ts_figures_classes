enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum Color {
  Red,
  Green,
  Blue,
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

function roundFigureArea(area: number): number {
  return Math.floor(area * 100) / 100;
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
      throw new Error('Side should be greater then 0!');
    }

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error(
        'The longest side should less than sum of other two sides!',
      );
    }
  }

  getArea(): number {
    const semiP: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt(
      semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c),
    );

    return roundFigureArea(area);
  }
}

export class Circle implements Figure {
  public shape: Shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius should be greater then 0!');
    }
  }

  getArea(): number {
    const area: number = (this.radius ** 2) * Math.PI;

    return roundFigureArea(area);
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
      throw new Error('Side should be greater then 0!');
    }
  }

  getArea(): number {
    const area: number = this.width * this.height;

    return roundFigureArea(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
