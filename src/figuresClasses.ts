export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Length of sides must be greater than 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error("sides 1, 2 and 3 can't form a triangle");
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return (
      Math.round(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error('the radius cannot be less than 0');
    }
  }

  getArea(): number {
    return Math.floor(+Math.PI * this.r ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('side a or b cannot be less than 0');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
