type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number
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
      throw new Error('length is <= 0');
    }

    const sides = [a, b, c];

    sides.sort((side1, side2) => side2 - side1);

    const longestSide = sides[0];
    const sum = sides[1] + sides[2];

    if (longestSide >= sum) {
      throw new Error('the longest side is >= than a sum of two others');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius is <= 0');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.radius ** 2) * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('width/heigth is <= 0');
    }
  }

  getArea(): number {
    return Math.floor((this.width * this.height * 100)) / 100;
  }
}

export function getInfo(figure:Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
