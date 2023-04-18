type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Any side can`t be equil or less then 0');
    }

    if (a + b <= c || b + c <= a || a + c <= b) {
      throw new Error(`sides ${a}, ${b} and ${c} can\`t form a triangle`);
    }
  }

  getArea(): number {
    const semiPer = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt((semiPer * (semiPer - this.a)
      * (semiPer - this.b) * (semiPer - this.c))) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public a: number,
  ) {
    if (a <= 0) {
      throw new Error('Any side can`t be equil or less then 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.a ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('Any side can`t be equil or less then 0');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
