
type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

function roundNumber(number: number, countDigits: number): number {
  return Math.trunc(number * (10 ** countDigits))
    / (10 ** countDigits);
}

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Invalid data input');
    }

    if ((this.c >= this.a + this.b)
      || (this.a >= this.c + this.b)
      || (this.b >= this.a + this.c)
    ) {
      throw new Error('sides 1, 2 and 3 can not form a triangle');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return roundNumber(Math.sqrt(s * (s - this.a) * (s - this.b)
      * (s - this.c)), 2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('can\'t form a circle with that size');
    }
  }

  getArea(): number {
    return roundNumber(Math.PI * this.radius ** 2, 2);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('can\'t form a rectancgle with that width and height');
    }
  }

  getArea(): number {
    return roundNumber((this.width * this.height), 2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} `
    + `- ${figure.getArea()}`;
}
