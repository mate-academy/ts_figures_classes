export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea: () => number
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(public color: 'red' | 'green' | 'blue',
    public sides: { a: number; b: number; c: number }) {
    if (this.sides.a <= 0 || this.sides.b <= 0 || this.sides.c <= 0
        || this.getArea() <= 0) {
      throw Error(`sides ${this.sides.a}, ${this.sides.b},
      and ${this.sides.c} can't form a ${this.shape}`);
    }

    this.sides = sides;
  }

  getArea(): number {
    const s = (this.sides.a + this.sides.b + this.sides.c) / 2;
    const res = Math.sqrt(s * (s - this.sides.a)
    * (s - this.sides.b) * (s - this.sides.c));

    return +res.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(public color: 'red' | 'green' | 'blue',
    public radius: number) {
    if (this.radius <= 0) {
      throw Error(`${this.radius} can't form a ${this.shape}`);
    }
  }

  getArea(): number {
    const res = Math.PI * this.radius ** 2;

    return +res.toFixed(2);
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(public color: 'red' | 'green' | 'blue',
    public width: number, public height: number) {
    if (this.width <= 0 || this.height <= 0) {
      throw Error(`${this.width} and ${this.height}
        can't form a ${this.shape}`);
    }
  }

  getArea(): number {
    const res = this.height * this.width;

    return +res.toFixed(2);
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
