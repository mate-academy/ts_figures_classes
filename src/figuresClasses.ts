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
  shape: Shape;

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = Shape.Triangle;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Side length must be a positive number');
    }

    const maxSideLength = Math.max(this.a, this.b, this.c);
    const perimeter = this.a + this.b + this.c;

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

    return Math.floor(geronFormula(this.a, this.b, this.c) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    this.shape = Shape.Circle;

    if (this.radius <= 0) {
      throw new Error('Radius length must be a positive number');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    this.shape = Shape.Rectangle;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Side length must be a positive number');
    }
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
