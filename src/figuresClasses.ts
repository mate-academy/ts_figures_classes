enum FigureShapes {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

enum FigureColors {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: FigureShapes;
  color: FigureColors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = FigureShapes.Triangle;

  constructor(
    public color: FigureColors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side size should be greater than zero');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('Side size should be less than the sum of two other');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  shape = FigureShapes.Circle;

  constructor(
    public color: FigureColors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw Error('Radius should be greater than zero');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = FigureShapes.Rectangle;

  constructor(
    public color: FigureColors,
    public width: number,
    public height : number,
  ) {
    if (width <= 0 || height <= 0) {
      throw Error('Side size should be greater than zero');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return +area.toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
