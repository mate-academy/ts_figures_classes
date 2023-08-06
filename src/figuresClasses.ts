type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

// export function getArea(): number {
//   if (this.b === undefined && this.c === undefined && this.a !== undefined) {
//     return Math.PI * this.a ** 2;
//   }

//   if (this.a !== undefined && this.b !== undefined && this.c === undefined) {
//     return this.a * this.b;
//   }

//   if (this.a !== undefined && this.b !== undefined && this.c !== undefined) {
//     return ((this.a + this.b + this.c) / 2);
//   }

//   return 0;
// }

export interface Figure {
  shape: Shape,
  color: Color,

  getArea(): number;
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public a: number,
  ) {
    if (this.a <= 0) {
      throw new
      Error(`it is impossible to form a circle with radius ${this.a}`);
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * (this.a ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new
      Error(`it is impossible to form a rectangle with sides ${a} and ${b}`);
    }
  }

  getArea(): number {
    return (Math.round((this.a * this.b) * 100) / 100);
  }
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0
      || this.a + this.b <= this.c || this.c + this.b <= this.a
      || this.c + this.a <= this.b) {
      throw new
      Error(`sides ${this.a}, ${this.b} and ${this.c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (Math
      .round((Math
        .sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))) * 100) / 100);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
