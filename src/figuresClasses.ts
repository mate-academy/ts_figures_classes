type Color = 'red' | 'blue' | 'green';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Color,
  shape: Shape,
  getArea(): number,
}

function rounding(expr: number): number {
  return Math.floor(expr * 100) / 100;
}

function validation(check: number[], shape: Shape): Error | void {
  if (check.some((item) => item <= 0)) {
    throw new Error(
      `A ${(shape === 'circle') ? 'radius' : 'side'} `
      + `of a ${shape} cannot be equal to 0 or be negative.`,
    );
  }

  if (shape === 'triangle') {
    const [a, b, c] = check;
    const maxSide: number = Math.max(a, b, c);
    const checkLongestSide: boolean = maxSide >= (a + b + c) - maxSide;

    if (checkLongestSide) {
      throw new Error(
        'the longest side of the triangle must be greater than '
        + 'the sum of the other two',
      );
    }
  }
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    validation([a, b, c], this.shape);
  }

  getArea(): number {
    const semiP: number = (this.a + this.b + this.c) / 2;

    return rounding(
      Math.sqrt(
        semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c),
      ),
    );
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    validation([radius], this.shape);
  }

  getArea(): number {
    return rounding(Math.PI * (this.radius ** 2));
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    validation([width, height], this.shape);
  }

  getArea(): number {
    return rounding(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
