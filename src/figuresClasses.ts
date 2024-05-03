type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (
      Math.min(a, b, c) <= 0 ||
      a + b + c - Math.max(a, b, c) <= Math.max(a, b, c)
    ) {
      throw new Error('Check your values! A triangle cannot be constructed');
    }
  }

  getArea(): number {
    const semiperimetr = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiperimetr *
        (semiperimetr - this.a) *
        (semiperimetr - this.b) *
        (semiperimetr - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public a: number,
  ) {
    if (this.a <= 0) {
      throw new Error('Check the radius value');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.a * this.a);

    return Math.floor(area * 100) / 100;
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
      throw new Error('Check your rectangle parameters!');
    }
  }

  getArea(): number {
    const area = this.a * this.b;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area: number = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
