export interface Figure {
  shape: string,
  color: string,
  getArea(): number,
}

export class Triangle implements Figure {
  public shape;

  public sides;

  constructor(public color: 'red' | 'green' | 'blue', ...args: number[]) {
    this.shape = 'triangle';
    this.color = color;
    this.sides = [...args].sort(); /* Sort helps with detecting 0s if they
                                      were not in the first position */

    if ((this.sides[0] + this.sides[1] <= this.sides[2])
    || (this.sides[2] + this.sides[0] <= this.sides[1])
    || (this.sides[2] + this.sides[1] <= this.sides[0])
    || this.sides[0] <= 0) {
      throw new Error('Triangle not possible with given sides!');
    }
  }

  getArea(): number {
    /* I hate math and therefore hate you for this,
    but as requested, Heron's formula */
    const semiPer: number = (this.sides[0] + this.sides[1] + this.sides[2]) / 2;
    const bracket1: number = semiPer - this.sides[0];
    const bracket2: number = semiPer - this.sides[1];
    const bracket3: number = semiPer - this.sides[2];
    const squaredResult: number = semiPer * bracket1 * bracket2 * bracket3;
    const result: number = Math.sqrt(squaredResult);

    return (Math.round(result * 100)) / 100;
  }
}

export class Circle implements Figure {
  public shape;

  public color;

  public radius;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    this.shape = 'circle';
    this.color = color;
    this.radius = radius;

    if (radius <= 0) {
      throw new Error('Circle not possible with given radius!');
    }
  }

  getArea(): number {
    return (Math.floor((this.radius ** 2) * Math.PI * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  public shape;

  public color;

  public sides;

  constructor(color: 'red' | 'green' | 'blue', ...sides: number[]) {
    this.shape = 'rectangle';
    this.color = color;
    this.sides = [...sides].sort();

    if (this.sides[0] <= 0) {
      throw new Error('Rectangle not possible with given sides!');
    }
  }

  getArea(): number {
    return this.sides[0] * this.sides[1];
  }
}

export function getInfo(
  figure: {['color']: string, ['shape']: string, ['getArea']: Function},
): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
