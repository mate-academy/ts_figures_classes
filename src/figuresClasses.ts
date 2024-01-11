type ColorOfFigure = 'red' | 'blue' | 'green';
type ShapeOfFigure = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: ShapeOfFigure;
  color: ColorOfFigure;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: ShapeOfFigure = 'triangle';

  constructor(
    public color: ColorOfFigure,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        'Side of triangle is less than zero',
      );
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        'Hypotenuse is less than sum of two sides',
      );
    }
  }

  getArea(): number {
    const half = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      half * (half - this.a) * (half - this.b) * (half - this.c),
    ).toFixed(2);

    return +area;
  }
}

export class Circle implements Figure {
  shape: ShapeOfFigure = 'circle';

  constructor(public color: ColorOfFigure, public radius: number) {
    if (radius <= 0) {
      throw new Error('Circle radius is less than zero');
    }
  }

  getArea(): number {
    const area = Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  shape: ShapeOfFigure = 'rectangle';

  constructor(
    public color: ColorOfFigure,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle dimensions are less than zero');
    }
  }

  getArea(): number {
    const area = (this.width * this.height).toFixed(2);

    return +area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
