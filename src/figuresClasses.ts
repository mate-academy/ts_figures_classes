type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function sidesLengthCheck(...sides: number[]): void {
  if (Math.min(...sides) <= 0) {
    throw new Error('Side lengths should always be positive numbers!');
  }
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    private a: number,
    private b: number,
    private c: number,
  ) {
    sidesLengthCheck(a, b, c);

    if (a >= b + c || b >= c + a || c >= a + b) {
      throw new Error(
        'The sum of the lengths of any two sides of a triangle '
        + 'is always greater than the length of the third side!',
      );
    }
  }

  getArea(): number {
    const semiP: number = (this.a + this.b + this.c) / 2;
    const area: number = Math.sqrt([this.a, this.b, this.c]
      .reduce((prev, curr) => prev * (semiP - curr), semiP));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius cannot be negative!');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    private width: number,
    private height: number,
  ) {
    sidesLengthCheck(height, width);
  }

  getArea(): number {
    return Math.round(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
