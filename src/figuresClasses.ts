// import { error } from 'console';
// import { NumberLiteralType } from 'typescript';

export interface Figure {
  shape: 'triangle' | 'circle'| 'rectangle',
  color: 'red' | 'green' | 'blue',
}

export class Triangle implements Figure {
  shape: 'triangle' | 'circle'| 'rectangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0
      || (a + b) <= c || (a + c) <= b || (b + c) <= a) {
      throw new Error();
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    const formula: number = p * (p - this.a) * (p - this.b) * (p - this.c);

    const area: number = Math.sqrt(formula);

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  shape: 'triangle' | 'circle'| 'rectangle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public r: number,
  ) {
    if (r <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    const area: number = 3.14 * (this.r ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  shape: 'triangle' | 'circle'| 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    const area: number = this.a * this.b;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
