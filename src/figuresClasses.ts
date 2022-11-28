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

function validation(check: boolean, message: string): Error | void {
  if (check) {
    throw new Error(
      message,
    );
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
    const checkNegative:boolean = a <= 0 || b <= 0 || c <= 0;
    const maxSide: number = Math.max(a, b, c);
    const checkLongestSide: boolean = maxSide >= (a + b + c) - maxSide;
    const messageNegative: string = 'A side of a triangle cannot be equal '
    + 'to 0 or be negative.';
    const messageLongest: string = 'the longest side of the triangle must '
    + 'be greater than the sum of the other two';

    validation(checkNegative, messageNegative);
    validation(checkLongestSide, messageLongest);
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
    const checkNegative: boolean = radius <= 0;
    const message = 'The radius of the circle must not be zero or negative';

    validation(checkNegative, message);
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
    const checkNegative:boolean = width <= 0 || height <= 0;
    const message = 'A side of a rectangle cannot be equal'
    + 'to 0 or be negative.';

    validation(checkNegative, message);
  }

  getArea(): number {
    return rounding(this.width * this.height);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
