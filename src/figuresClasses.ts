type FigShape = 'triangle' | 'circle' | 'rectangle';
type FigColor = 'red' | 'green' | 'blue';

export interface Figure {
  shape: FigShape;
  color: FigColor;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: FigShape = 'triangle';

  constructor(
    public color: FigColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides of triangle should be greater than zero');
    }

    if (a >= b + c || b >= c + a || c >= a + b) {
      throw new Error('One side of triangle can\'t '
        + 'be greater than sum of other two');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt((semiPerimeter - this.a) * (semiPerimeter - this.b)
      * (semiPerimeter - this.c) * semiPerimeter);

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: FigShape = 'circle';

  constructor(
    public color: FigColor,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius of circle should be greater than zero');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: FigShape = 'rectangle';

  constructor(
    public color: FigColor,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides of rectangle should be greater than zero');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
