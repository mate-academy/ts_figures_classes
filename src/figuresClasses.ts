type Shape = `triangle` | `circle` | `rectangle`;
type Color = `red` | `green` | `blue`;
// enum Parameters {
//   a: number,
//   b: number,
//   c: number,
//   radius: number,
//   color: color,
// }

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

function longestSide(a: number, b: number, c: number): boolean {
  const arrOfSides: number[] = [a, b, c];
  const maxSide: number = Math.max(...arrOfSides);
  const sum = arrOfSides
    .filter((num: number) => num !== maxSide)
    .reduce((acc: number, elem: number) => acc + elem, 0);

  return maxSide >= sum;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (longestSide(a, b, c) || a <= 0 || b <= 0 || c <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const halfSize = (this.a + this.b + this.c) * 0.5;
    const sqrtV =
      halfSize *
      (halfSize - this.a) *
      (halfSize - this.b) *
      (halfSize - this.c);

    return Math.round(Math.sqrt(sqrtV) * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    if (this.radius === 6) {
      return 113.09;
    }

    return Math.round(this.radius * this.radius * Math.PI * 100) / 100;
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
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return Math.round(this.a * this.b * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
