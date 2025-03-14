type FigureShape = 'triangle' | 'circle' | 'rectangle';
type FigureColor = 'red' | 'green' | 'blue';

export interface Figure {
  shape: FigureShape;
  color: FigureColor;
  getArea();
}

export class Triangle implements Figure {
  shape: FigureShape = 'triangle';

  constructor(
    public color: FigureColor,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0) {
      throw new Error('Length of side a must be more than 0');
    }

    if (b <= 0) {
      throw new Error('Length of side b must be more than 0');
    }

    if (c <= 0) {
      throw new Error('Length of side c must be more than 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(
        'Longest side should be less than sum of two other sides',
      );
    }
  }

  getArea(): number {
    const semiperimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiperimeter *
        (semiperimeter - this.a) *
        (semiperimeter - this.b) *
        (semiperimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: FigureShape = 'circle';

  constructor(
    public color: FigureColor,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be more than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: FigureShape = 'rectangle';

  constructor(
    public color: FigureColor,
    public width: number,
    public length: number,
  ) {
    if (width <= 0) {
      throw new Error('Width must be more than 0');
    }

    if (length <= 0) {
      throw new Error('Length must be more than 0');
    }
  }

  getArea(): number {
    const area = this.width * this.length;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
