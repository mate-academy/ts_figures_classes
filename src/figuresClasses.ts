export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';

  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(public color: 'red' | 'green' | 'blue',
    public a: number, public b: number, public c: number) {
    if (a <= 0 || b <= 0 || c <= 0
      || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Wrong length properties');
    }
  }

  getArea(): number {
    const p = 1 / 2 * (this.a + this.b + this.c);

    return +(Math.sqrt(p * (p - this.a) * (p - this.b)
    * (p - this.c)).toFixed(2));
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(public color: 'red' | 'green' | 'blue', public radius: number) {
    if (radius <= 0) {
      throw new Error('Wrong length property');
    }
  }

  getArea(): number {
    return Math.floor(((Math.PI * this.radius ** 2) * 100)) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(public color: 'red' | 'green' | 'blue',
    public a: number, public b: number) {
    if (a <= 0 || b <= 0) {
      throw new Error('Wrong length properties');
    }
  }

  getArea(): number {
    return +((this.a * this.b).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
