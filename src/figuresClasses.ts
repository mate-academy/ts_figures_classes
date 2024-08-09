export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  a: number;

  b: number;

  c: number;

  getArea(): number {
    const aSide = this.a;
    const bSide = this.b;
    const cSide = this.c;

    const semiP = (aSide + bSide + cSide) * 0.5;

    const area = Math.sqrt(
      semiP * (semiP - aSide) * (semiP - bSide) * (semiP - cSide),
    );

    return Math.floor(area * 100) / 100;
  }

  constructor(
    public color: string,
    a: number,
    b: number,
    c: number,
  ) {
    const hasEnoughLength: boolean = a > 0 && b > 0 && c > 0;

    const sum: number = [a, b, c].reduce(
      (accum, current) => accum + current,
      0,
    );

    const largestSide = Math.max(a, b, c);

    const isTriangle: boolean = sum - largestSide > largestSide;

    if (!hasEnoughLength) {
      throw new Error('some side is the wrong length');
    }

    if (!isTriangle) {
      throw new Error('it isn`t a triangle');
    }

    this.a = a;
    this.b = b;
    this.c = c;
  }
}

export class Circle implements Figure {
  radius: number;

  shape: string = 'circle';

  constructor(
    public color: string,
    radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('circle should have proper radius');
    }
    this.radius = radius;
  }

  getArea(): number {
    const area: number = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  a: number;

  b: number;

  shape: string = 'rectangle';

  constructor(
    public color: string,
    a: number,
    b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('rectangle should has sides longer than 0');
    }
    this.a = a;
    this.b = b;
  }

  getArea(): number {
    const area: number = this.a * this.b;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
