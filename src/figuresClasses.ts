export interface Figure {
  color: string,
  shape: string,
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a === 0 || b === 0 || c === 0) {
      throw new Error('any length is <= 0');
    }

    const arrayInValues: number[] = [this.a, this.b, this.c];

    arrayInValues.sort((x, y) => y - x);

    if (arrayInValues[0] >= arrayInValues[1] + arrayInValues[2]) {
      throw new
      Error('the longest side of a triangle is >= than a sum of two others');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;
    const s: number = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(s * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('any length is <= 0');
    }
  }

  getArea(): number {
    const s: number = Math.PI * (this.radius * this.radius);

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  constructor(
    public color: string,
    public height: number,
    public width: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('any length is <= 0');
    }
  }

  getArea(): number {
    const s : number = this.height * this.width;

    return Math.floor(s * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
