export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export enum Colors {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export interface Figure {
  shape: Shape;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = Shape.Triangle;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side length must be a positive number');
    }

    const maxSideLength = Math.max(a, b, c);
    const perimeter = a + b + c;

    if (maxSideLength >= (perimeter - maxSideLength)) {
      throw new Error('Side cannot be greater than the sum of the other two');
    }
  }

  getArea(): number {
    const geronFormula = (a: number, b: number, c: number): number => {
      const hfPerimetr = (a + b + c) / 2;
      const geron = Math.sqrt(
        hfPerimetr * (hfPerimetr - a) * (hfPerimetr - b) * (hfPerimetr - c),
      );

      return geron;
    };

    const { a, b, c } = this;

    return Math.floor(geronFormula(a, b, c) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = Shape.Circle;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius length must be a positive number');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = Shape.Rectangle;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Side length must be a positive number');
    }
  }

  getArea(): number {
    const { width, height } = this;

    return Math.floor((width * height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
