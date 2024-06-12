type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
    public shape: Shape = 'triangle',
  ) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;
    this.shape = 'triangle';

    if (
      this.a === 0 ||
      this.b === 0 ||
      this.c === 0 ||
      this.a >= this.b + this.c ||
      this.b >= this.a + this.c ||
      this.c >= this.a + this.b
    ) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const semiperimetrOfTriangle = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(
      semiperimetrOfTriangle *
        (semiperimetrOfTriangle - this.a) *
        (semiperimetrOfTriangle - this.b) *
        (semiperimetrOfTriangle - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Color,
    public radius: number,
    public shape: Shape = 'circle',
  ) {
    this.radius = radius;
    this.color = color;
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Color,
    public height: number,
    public width: number,
    public shape: Shape = 'rectangle',
  ) {
    this.height = height;
    this.width = width;
    this.color = color;
    this.shape = 'rectangle';

    if (this.height <= 0 || this.width <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  const { color, shape } = figure;

  return `A ${color} ${shape} - ${figure.getArea()}`;
}
