type Color = 'red' | 'green' | 'blue';
type GeomFigure = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  color: Color;
  shape: GeomFigure;

  getArea(): number;
}

export class Triangle implements Figure {
  shape: GeomFigure = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('one of the side <= 0, enter the correct data');
    }

    if (this.a >= this.b + this.c
      || this.b >= this.a + this.c
      || this.c >= this.a + this.b) {
      throw new Error('one of the side is very long, enter the correct data');
    }
  }

  getArea(): number {
    const per = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(per * (per - this.a)
      * (per - this.b) * (per - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: GeomFigure = 'circle';

  constructor(
    public color: Color,
    public a: number,
  ) {
    if (this.a <= 0) {
      throw new Error('a radius <= 0, enter the correct data');
    }
  }

  getArea(): number {
    const area = Math.PI * this.a * this.a;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: GeomFigure = 'rectangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('one of the side <= 0, enter the correct data');
    }
  }

  getArea(): number {
    const area = this.a * this.b;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
