type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;

  getArea(): number;
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
      this.a === 0 ||
      this.b === 0 ||
      this.c === 0 ||
      this.a >= this.b + this.c ||
      this.b >= this.a + this.c ||
      this.c >= this.a + this.b
    ) {
      throw new Error('Triangle sides do not form a valid triangle');
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
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Circle radius must be greater than zero');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius * this.radius;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public height: number,
    public width: number,
  ) {
    if (this.height <= 0 || this.width <= 0) {
      throw new Error('Rectangle dimensions must be greater than zero');
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
