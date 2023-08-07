type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

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
      Error('the circle cannot have a radius <= 0');
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
      throw new Error(`sides ${a} and ${b} can't form a rectangle`);
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
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
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
