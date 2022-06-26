
type Shape = 'triangle' | 'circle' | 'rectangle';

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a === 0 || b === 0 || c === 0) {
      throw new Error('One of the sides is Zero(0)');
    }

    if (a + b <= c || c + b <= a || a + c <= b) {
      throw new Error('Use proper values to calculate area');
    }
  }

  getArea(): number {
    const p: number = 0.5 * (this.a + this.b + this.c);
    const S: number = Math.sqrt(p * ((p - this.a)
      * (p - this.b) * (p - this.c)));

    return Math.round(S * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Use proper values to calculate area');
    }
  }

  getArea(): number {
    const S: number = Math.PI * this.radius ** 2;

    return Math.floor(S * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('Use proper values to calculate area');
    }
  }

  getArea(): number {
    const S: number = this.a * this.b;

    return S;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
