type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export function isInvalidSides(a: number, b = 1, c = 1): boolean {
  if (a <= 0 || b <= 0 || c <= 0) {
    return true;
  }

  return false;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    readonly shape: Shape = 'triangle',
  ) {
    const sideA = this.a;
    const sideB = this.b;
    const sideC = this.c;

    const isTriangle = sideA >= sideB + sideC
      || sideB >= sideA + sideC
      || sideC >= sideA + sideB;

    if (isInvalidSides(sideA, sideB, sideC)) {
      throw new Error('invalid values');
    }

    if (isTriangle) {
      throw new Error('invalid values');
    }
  }

  getArea(): number {
    let s: number = (this.a + this.b + this.c) / 2;

    s = s * (s - this.a) * (s - this.b) * (s - this.c);

    return +Math.sqrt(s).toFixed(2);
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    readonly shape: Shape = 'circle',
  ) {
    if (isInvalidSides(this.radius)) {
      throw new Error('invalid values');
    }
  }

  getArea(): number {
    const s: number = Math.PI * (this.radius ** 2);

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    readonly shape: Shape = 'rectangle',
  ) {
    if (isInvalidSides(this.width, this.height)) {
      throw new Error('invalid values');
    }
  }

  getArea(): number {
    const s: number = this.width * this.height;

    return +s.toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
