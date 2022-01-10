
export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'blue' | 'green',
  getArea(): number,
}

export class Triangle implements Figure {
  shape = 'triangle';

  semiPerim: number;

  constructor(public color: 'red' | 'blue' | 'green',
    public a: number, public b: number, public c: number) {
    if (a >= b + c || b >= a + c || c >= a + b
      || a === 0 || b === 0 || c === 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    this.semiPerim = (this.a + this.b + this.c) / 2;

    return Math.round(((this.semiPerim
      * (this.semiPerim - this.a)
      * (this.semiPerim - this.b)
      * (this.semiPerim - this.c)) ** 0.5) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(public color: 'red' | 'blue' | 'green', public radius: number) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return Math.floor((this.radius ** 2 * Math.PI) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(public color: 'red' | 'blue' | 'green',
    public width: number, public height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
