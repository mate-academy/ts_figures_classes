export interface Figure {
  getArea: () => number
}

type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(public color: Color,
    public a: number, public b: number, public c: number) {
    if (a <= 0 || b <= 0 || c <= 0
        || a >= b + c || b >= a + c || c >= a + b) {
      throw Error(`sides ${a}, ${b},
      and ${c} can't form a ${this.shape}`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const intermediateResult = s * (s - this.a) * (s - this.b) * (s - this.c);

    const res = Math.sqrt(intermediateResult);

    return +res.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(public color: Color,
    public radius: number) {
    if (this.radius <= 0) {
      throw Error(`${this.radius} can't form a ${this.shape}`);
    }
  }

  getArea(): number {
    const res = Math.PI * (this.radius ** 2);

    return parseFloat(res.toFixed(2));
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(public color: Color,
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
