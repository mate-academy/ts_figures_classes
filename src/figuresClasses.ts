type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape = 'triangle';

  constructor(
    readonly color: Color,
    readonly a: number,
    readonly b: number,
    readonly c: number,
  ) {
    if (a < 1 || b < 1 || c < 1) {
      throw new Error('Bad input data!');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('It cannot be a triangle!');
    }
  }

  getArea = (): number => {
    const halfPerimeter: number = (this.a + this.b + this.c) / 2;
    const areaOfTriangle = Math.sqrt(halfPerimeter * (halfPerimeter - this.a)
      * (halfPerimeter - this.b) * (halfPerimeter - this.c));

    return Math.floor(areaOfTriangle * 100) / 100;
  };
}

export class Circle implements Figure {
  readonly shape = 'circle';

  constructor(
    readonly color: Color,
    readonly radius: number,
  ) {
    if (radius < 0) {
      throw new Error('Bad input data!');
    }
  }

  getArea = (): number => {
    return Math.floor((this.radius ** 2 * Math.PI) * 100) / 100;
  };
}

export class Rectangle implements Figure {
  readonly shape = 'rectangle';

  constructor(
    readonly color: Color,
    readonly a: number,
    readonly b: number,
  ) {
    if (a < 1 || b < 1) {
      throw new Error('Bad input data!');
    }
  }

  getArea = (): number => {
    return Math.floor((this.a * this.b) * 100) / 100;
  };
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
