/*
  eslint max-len: ["error", { "ignoreStrings": true }]
*/

enum FigureType {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle'
}

type ColorType = 'red' | 'green' | 'blue';

export interface Figure {
  shape: FigureType,
  color: ColorType,
  getArea():number,
}

export class Triangle implements Figure {
  shape = FigureType.triangle;

  constructor(
    public color :Figure['color'],
    public a :number,
    public b :number,
    public c :number,
  ) {
    if (a < 0 || b < 0 || c < 0) {
      throw new Error('set each side to positive number or pick your favorite TS error');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('the sum of the lengths of any two sides of a triangle must be greater than or equal to the length of the third side');
    }
  }

  getArea(): number {
    const semiPerimeter = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(semiPerimeter
      * (semiPerimeter - this.a)
      * (semiPerimeter - this.b)
      * (semiPerimeter - this.c));

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape = FigureType.circle;

  constructor(
    public color :Figure['color'],
    public r :number,
  ) {
    if (r <= 0) {
      throw new Error('radius should be a positive number');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.r ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape = FigureType.rectangle;

  constructor(
    public color :Figure['color'],
    public a: number,
    public b: number,
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('all sides must be positive numbers');
    }
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
