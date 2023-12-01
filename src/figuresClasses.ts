type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  a: number;

  b: number;

  c: number;

  shape: Shape = 'triangle';

  constructor(
    public color: Color,

    a: number,
    b: number,
    c: number,
  ) {
    this.color = color;

    const sides = [a, b, c];
    const longestSide: number = Math.max(...sides);
    const indexOfLongest = sides.indexOf(longestSide);
    const otherSides: number[] = sides.slice(0, indexOfLongest);
    const arePositive: boolean = sides[0] > 0 && sides[1] > 0 && sides[2] > 0;
    const isTriangle: boolean = longestSide < otherSides[0] + otherSides[1];

    if (!arePositive || !isTriangle) {
      throw new Error('Not a triangle');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  radius: number;

  shape: Shape = 'circle';

  constructor(
    public color: Color,
    radius: number,
  ) {
    this.color = color;
    this.radius = radius;

    if (this.radius <= 0) {
      throw new Error('Not a circle');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2) * 100;

    return Math.floor(area) / 100;
  }
}

export class Rectangle implements Figure {
  width: number;

  heith: number;

  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    width: number,
    heith: number,
  ) {
    this.color = color;
    this.width = width;
    this.heith = heith;

    if (this.width <= 0 || this.heith <= 0) {
      throw new Error('Not a rectangle');
    }
  }

  getArea(): number {
    return this.width * this.heith;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
