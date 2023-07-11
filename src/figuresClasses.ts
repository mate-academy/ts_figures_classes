type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

function isTriangle(side1: number, side2: number, side3: number): boolean {
  const sides: number[] = [side1, side2, side3];
  const maxSide: number = Math.max(side1, side2, side3);

  const twoSides = sides.filter((side: number) => side !== maxSide);

  const sumTwoSides = twoSides[0] + twoSides[1];

  if (maxSide < sumTwoSides) {
    return false;
  }

  return true;
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('the number is not positive');
    }

    if (isTriangle(this.a, this.b, this.c)) {
      throw new Error('is not a triangle');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(s * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(public color: Color, public radius: number) {
    if (this.radius <= 0) {
      throw new Error('the number is not positive');
    }
  }

  getArea(): number {
    const s: number = Math.PI * (this.radius * this.radius);

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('the number is not positive');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
