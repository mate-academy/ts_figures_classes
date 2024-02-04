export interface Figure {
  getArea: () => number
}

type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0
        || a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('error with data');
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

  constructor(public color: Color, public radius: number) {
    if (this.radius <= 0) {
      throw new Error('error with data');
    }
  }

  getArea(): number {
    const res = Math.PI * (this.radius ** 2);

    return Number(res.toFixed(2));
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('error with data');
    }
  }

  getArea(): number {
    return this.height * this.width;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
