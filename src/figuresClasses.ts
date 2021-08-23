type Color = 'red' | 'green' | 'blue';

enum Shape {
  triangle = 'triangle',
  circle = 'circle',
  rectangle = 'rectangle',
}

export interface Figure {
  color: Color,
  shape: Shape,

  getArea(): number,
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape = Shape.triangle,
  ) {
    if (
      (this.a <= 0 || this.b <= 0 || this.c <= 0)
      || (this.a + this.b <= this.c
        || this.a + this.c <= this.b || this.b + this.c <= this.a)
    ) {
      throw new Error('Those sides cannot form a triangle');
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
    public radius: number,
    public shape = Shape.circle,
  ) {
    if (this.radius <= 0) {
      throw new Error('You cannot form a circle');
    }
  }

  getArea(): number {
    const area = 3.14 * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public width: number,
    public height: number,
    public shape = Shape.rectangle,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('You cannot form a rectangle');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
