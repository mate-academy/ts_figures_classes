type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
type Area = number;

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: Function
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(
        'a, b and c should be more than 0',
      );
    }

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error(
        'longest side of triangle should NOT be more than other other two',
      );
    }
  }

  public getArea = (): Area => {
    const semiperimeter = 1 / 2 * (this.a + this.b + this.c);

    const square = Math.sqrt(semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c));

    return Math.floor(square * 100) / 100;
  };
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius should be more than 0');
    }
  }

  public getArea = (): Area => {
    const square = this.radius * this.radius * Math.PI;

    return Math.floor(square * 100) / 100;
  };
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0) {
      throw new Error('width should be more than 0');
    }

    if (height <= 0) {
      throw new Error('height should be more than 0');
    }
  }

  public getArea = (): Area => {
    const square = this.height * this.width;

    return Math.floor(square * 100) / 100;
  };
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
