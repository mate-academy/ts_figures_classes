export interface Figure {
  shape:string;
  color: string;

  getArea():number;
}

export class Triangle implements Figure {
  shape: string;

  constructor(public color: string,
    public a: number, public b: number, public c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Invalid values: must be greater than 0');
    }

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error('Invalid triangle sides');
    }

    this.shape = 'triangle';
  }

  getArea(): number {
    const p: number = this.a + this.b + this.c;

    return +((p / 2 * (p / 2 - this.a) * (p / 2 - this.b) * (p / 2 - this.c))
    ** 0.5).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: string;

  constructor(public color: string, public r: number) {
    if (r <= 0) {
      throw new Error('Invalid values: must be greater than 0');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    return Math.floor(Math.PI * this.r ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string;

  constructor(public color: string, public a: number, public b: number) {
    if (a <= 0 || b <= 0) {
      throw new Error('Invalid values: must be greater than 0');
    }

    this.shape = 'rectangle';
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(f: Figure): string {
  return `A ${f.color} ${f.shape} - ${f.getArea()}`;
}
