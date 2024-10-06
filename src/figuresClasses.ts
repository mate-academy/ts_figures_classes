type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function roundNumber(numberWithRedundantNumber: number): number {
  return Math.floor(numberWithRedundantNumber * 100) / 100;
}

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const maxSide = Math.max(a, b, c);

    if ([a, b, c].some((item) => item <= 0) || maxSide >= a + b + c - maxSide) {
      throw new Error('Such a triangle cannot exist');
    }
  }

  getArea(): number {
    const areaFigure = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      areaFigure *
        (areaFigure - this.a) *
        (areaFigure - this.b) *
        (areaFigure - this.c),
    );

    return roundNumber(area);
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Such a circle cannot exist');
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return roundNumber(area);
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Such a rectangle cannot exist');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return roundNumber(area);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
