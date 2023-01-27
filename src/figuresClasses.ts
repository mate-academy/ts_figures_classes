
// function triangle(a: number, b: number, c: number): boolean {
//   if (a + b < c || a + c < b || c + b < a) {
//     return false;
//   }

//   if (a < 0 || b < 0 || c < 0) {
//     return false;
//   }

//   return true;
// }

enum Shape {
  triangle,
  circle,
  rectangle,
}

enum Color {
  red,
  green,
  blue,
}

export interface Figure {
  shape: Shape,
  color: Color,
  a: number,
  b: number,
  c: number,
  getArea(): number,
}

export class Triangle {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public shape: string,
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {}

  getArea(): number {
    return (this.a + this.b + this.c) / 2;
  }
}

export class Circle {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public shape: string,
    public color: string,
    public r: number,
  ) {}

  getArea(): number {
    return Math.PI * this.r * this.r;
  }
}

export class Rectangle {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    public shape: string,
    public color: string,
    public a: number,
    public b: number,
  ) {}

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  if (figure.c !== undefined) {
    return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
  }

  if (figure.b !== undefined) {
    return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
  }

  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
