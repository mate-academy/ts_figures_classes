type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';
export interface Figure {
  color: Color,
  shape: Shape,
  getArea(): number,
}

export class Triangle implements Figure {
  constructor(
    public color:Color,
    public a: number,
    public b: number,
    public c: number,
    public shape:Shape = 'triangle',
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('your error message');
    }

    const longestSide: number = Math.max(this.a, this.b, this.c);

   const perimeter = this.a + this.b + this.c
    if (perimeter - longestSide <= longestSide)
      {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return parseFloat(area.toFixed(2));
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public shape:Shape = 'circle',
  ) {
    if (this.a <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const pi = Math.PI;
    const area = pi * (this.a ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public shape:Shape = 'rectangle',
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const area = this.a * this.b;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
