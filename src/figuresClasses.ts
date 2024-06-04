type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = 'triangle',
  ) {
    if (this.a === 0 || this.b === 0 || this.c === 0) {
      throw new Error('side can not be 0');
    }

    const arr: number[] = [this.a, this.b, this.c];
    const index: number = arr.indexOf(Math.max(...arr));
    const check = arr.filter((e) => e !== arr[index]);
    const sum = check.reduce((acc, val) => acc + val, 0);

    if (arr[index] >= sum) {
      throw new Error(
        'Invalid triangle! One side can`t be >= than sum of others',
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return (
      Math.trunc(
        Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = 'circle',
  ) {
    if (this.radius <= 0) {
      throw new Error('radius can not be 0');
    }
  }

  getArea(): number {
    return Math.trunc(Math.PI * Math.pow(this.radius, 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape: Shape = 'rectangle',
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('side can not be 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
