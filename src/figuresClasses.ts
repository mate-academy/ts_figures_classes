export enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  shape: Shape;
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0
      || this.b <= 0
      || this.c <= 0
      || this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.a + this.c <= this.b
    ) {
      throw new Error();
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const result = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(100 * result) / 100;
  }
}

export class Circle implements Figure {
  shape = Shape.circle;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    const area = 3.14 * this.radius ** 2;

    const result = Math.floor(area * 100) / 100;

    return result;
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error();
    }
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
