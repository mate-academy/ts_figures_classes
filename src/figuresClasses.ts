export type Shape = 'circle' | 'triangle' | 'rectangle';
export type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  getArea: () => number;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    const allSidesValid: boolean = (a && b && c) > 0;
    const isTriangle: boolean = a < b + c && b < a + c && c < a + b;

    if (!allSidesValid) {
      throw new Error('All sides must be positive numbers');
    }

    if (!isTriangle) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    this.getArea = (): number => {
      const s = (a + b + c) / 2;
      const heronsFormula = Math.sqrt(s * (s - a) * (s - b) * (s - c));

      return Math.floor(heronsFormula * 100) / 100;
    };
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  getArea = (): number => Math.floor(Math.PI * this.radius ** 2 * 100) / 100;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number');
    }
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  getArea = (): number => Math.floor(this.width * this.height * 100) / 100;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be positive numbers');
    }
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
