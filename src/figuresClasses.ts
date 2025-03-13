/* eslint-disable */
export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: 'triangle';
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';
    if (a < 1 || b < 1 || c < 1) {
      throw new Error('One of length properties is less than 1');
    } else if (a + b <= c || b + c <= a || c + a <= b) {
      throw new Error(
        'One property is equal to or bigger than the sum of remaining properties',
      );
    }
  }
  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: 'circle';
  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    this.shape = 'circle';
    if (radius < 1) {
      throw new Error(`${radius} is less than 1, invalid property`);
    }
  }
  getArea(): number {
    const area = Math.PI * this.radius ** 2;
    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle';
  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';
    if (width < 1 || height < 1) {
      throw new Error('Length is smaller than 1, invalid property');
    }
  }
  getArea(): number {
    const area = this.width * this.height;
    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
