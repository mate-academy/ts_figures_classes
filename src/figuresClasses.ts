export enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue'
}

export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle'
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape = Shape.Triangle;

  getArea: () => number;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if ((a && b && c) <= 0) {
      throw new Error('All sides must be higher than zero');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid Triangle:'
        + 'For each side,'
        + 'the sum of its two sides must be greater than the third side.');
    }

    this.getArea = (): number => {
      const sem = (a + b + c) / 2;

      const heronFormula = Math.sqrt(sem * ((sem - a) * (sem - b) * (sem - c)));

      return Math.floor(heronFormula * 100) / 100;
    };
  }
}

export class Circle implements Figure {
  shape = Shape.Circle;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Invalid Circle: Radius must be greater than zero.');
    }
  }

  getArea = (): number => {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  };
}

export class Rectangle implements Figure {
  shape = Shape.Rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('The values of width and height cannot be negative');
    }
  }

  getArea = (): number => {
    return Math.floor(this.width * this.height * 100) / 100;
  };
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
