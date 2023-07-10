type SetFigures = 'triangle' | 'circle' | 'rectangle';
type SetColors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: SetFigures;
  color: SetColors;
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
  public shape: SetFigures = 'triangle';

  constructor(
    public color: SetColors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('your error message');
    }

    if (isTriangle(this.a, this.b, this.c)) {
      throw new Error('your error message');
    }

    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    const s = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(s * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: SetFigures = 'circle';

  constructor(public color: SetColors, public radius: number) {
    if (this.radius <= 0) {
      throw new Error('your error message');
    }

    this.color = color;
    this.radius = radius;
  }

  getArea(): number {
    const s: number = Math.PI * (this.radius * this.radius);

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: SetFigures = 'rectangle';

  constructor(
    public color: SetColors,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('your error message');
    }

    this.color = color;
    this.width = width;
    this.height = height;
  }

  getArea(): number {
    const s: number = this.width * this.height;

    return s;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
