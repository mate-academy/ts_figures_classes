type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

function round(num: number): number {
  return Math.floor(num * 100) / 100;
}

const check = (shape: Shape, ...params: number[]): boolean => {
  if (shape === 'triangle') {
    const maxSide = Math.max(params[0], params[1], params[2]);
    const sumOfLowSides = [params[0], params[1], params[2]]
      .filter((side) => side !== maxSide)
      .reduce((sum, side) => sum + side);

    if (maxSide >= sumOfLowSides) {
      return false;
    }
  }

  return params.every((param) => param > 0);
};

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!check(this.shape, a, b, c)) {
      throw new Error(
        'Incorrect data: impossible to build a triangle with this values',
      );
    }
  }

  getArea(): number {
    return round(1 / 4 * Math.sqrt(
      (this.a + this.b + this.c)
      * (this.b + this.c - this.a)
      * (this.a - this.b + this.c)
      * (this.a + this.b - this.c),
    ));
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (!check(this.shape, radius)) {
      throw new Error('Incorrect data: the radius must be greater then 0');
    }
  }

  getArea(): number {
    return round(Math.PI * this.radius * this.radius);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (!check(this.shape, width, height)) {
      throw new Error(
        'Incorrect data: width and height must be greater then 0',
      );
    }
  }

  getArea(): number {
    return round(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
