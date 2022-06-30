/*
  eslint max-len: ["error", { "ignoreStrings": true }]
*/

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea():number,
}

export class Triangle implements Figure {
  shape:Figure['shape'] = 'triangle';

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
      throw new Error('this is not a triangle');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Number(area.toFixed(2));
  }
}

export class Circle implements Figure {
  shape:Figure['shape'] = 'circle';

  constructor(
    public color :Figure['color'],
    public r :number,
  ) {
    if (r <= 0) {
      throw new Error('radius should be a positive number');
    }
  }

  getArea():number {
    return Math.floor((Math.PI * this.r ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape:Figure['shape'] = 'rectangle';

  constructor(
    public color :Figure['color'],
    public a: number,
    public b: number,
  ) {
    if (a < 0 || b < 0) {
      throw new Error("can't be less than 0");
    }
  }

  getArea():number {
    return this.a * this.b;
  }
}

export function getInfo(figure :Figure) :string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
