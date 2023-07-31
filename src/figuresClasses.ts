export interface Figure {
  getArea(): number | Error
}

export enum Color {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',
}

export enum Shape {
  Triangle = 'triangle',
  Circle = 'circle',
  Rectangle = 'rectangle',
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('one of sides is equal 0 or less');
    }

    if (a >= b + c || b >= c + a || c >= b + a) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number | Error {
    const { a } = this;
    const { b } = this;
    const { c } = this;

    const s: number = (a + b + c) / 2;
    const area: number = s * (s - a) * (s - b) * (s - c);

    return Math.floor(Math.sqrt(area) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(public color: 'red' | 'green' | 'blue', public radius: number) {
    if (radius <= 0) {
      throw new Error('radius is equal 0 or less');
    }
  }

  getArea(): number {
    return Math.floor(this.radius ** 2 * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('one of sides is equal 0 or less');
    }
  }

  getArea(): number | Error {
    return this.a * this.b;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
