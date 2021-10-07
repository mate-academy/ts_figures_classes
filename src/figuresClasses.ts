enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea(): number,
}

export class Triangle implements Figure {
  shape = Shape.triangle;

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Not valid value');
    }

    if (this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.a + this.c <= this.b) {
      throw new Error('sides 1, 2 and 3 can not form a triangle');
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
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Not valid value');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);
    const result = Math.floor(area * 100) / 100;

    return result;
  }
}

export class Rectangle implements Figure {
  shape = Shape.rectangle;

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || height <= 0) {
      throw new Error('Not valid value');
    }
  }

  getArea(): number {
    const result = this.width * this.height;

    return result;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
