type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape;

  getArea: () => number;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side\'s length has to be greater than 0');
    } else if (
      (a > b && a > c && a >= b + c)
      || (b > a && b > c && b >= a + c)
      || (c > a && c > b && c >= a + b)
    ) {
      throw new Error('The longes side of a triangle cannot be'
        + 'greater or equal than a sum of two others');
    }

    this.getArea = function getArea(): number {
      const semiperimeter = 0.5 * (this.a + this.b + this.c);

      return +Math.sqrt(semiperimeter * (semiperimeter - this.a)
        * (semiperimeter - this.b) * (semiperimeter - this.c)).toFixed(2);
    };
  }
}

export class Circle implements Figure {
  shape: Shape;

  getArea: () => number;

  constructor(
    public color: Color,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('Radiuds has to be greater than 0');
    }

    this.getArea = function getArea(): number {
      return Math.floor((Math.PI * radius ** 2) * 100) / 100;
    };
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  getArea: () => number;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error('Width and height has to be greater than 0');
    }

    this.getArea = function getArea(): number {
      return +(this.width * this.height).toFixed(2);
    };
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
