type Color = 'red' | 'green' | 'blue';

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape,
  color: Color,
  getArea() : number
}
export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = Shape.triangle,
  ) {
    if (this.a + this.b <= this.c
      || this.a + this.c <= this.b
      || this.b + this.c <= this.a) {
      throw new Error('Triangle is invalid');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * ((s - this.a) * (s - this.b) * (s - this.c)));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public r: number,
    public shape: Shape = Shape.circle,
  ) {
    if (this.r <= 0) {
      throw new Error('radius must be > 0');
    }
  }

  getArea(): number {
    const area = (Math.PI * this.r ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public shape: Shape = Shape.rectangle,
  ) {
    if (this.a <= 0 || this.b <= 0) {
      throw new Error('Sides must be > 0');
    }
  }

  getArea(): number {
    const area = (this.a * this.b);

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
