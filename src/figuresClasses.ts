/* eslint-disable max-len */
export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(public color: string, public a: number, public b: number, public c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Side should be greater than 0');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const semiP = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiP * (semiP - this.a) * (semiP - this.b) * (semiP - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle {
  shape = 'circle';

  constructor(public color: string, public radius: number) {
    if (radius <= 0) {
      throw new Error('Side should be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle {
  shape = 'rectangle';

  constructor(public color: string, public width: number, public height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Side should be greater than 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return (`A ${figure.color} ${figure.shape} - ${figure.getArea()}`);
}
