type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes,
  color: Colors,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  color: Colors;

  constructor(
    color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Incorrect value of side length');
    }

    if (a <= (b + c) || b <= (c + a) || c <= (a + b)) {
      throw new Error('Sides 1, 2 and 3 cannot form a triangle');
    }

    this.color = color;
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
  }
}

export class Circle implements Figure {
  shape: Shapes = 'circle';

  color: Colors;

  constructor(
    color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Incorrect value of radius');
    }

    this.color = color;
  }

  getArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = "rectangle";

  color: Colors;

  constructor(
    color: Colors,
    public c: number,
    public d: number,
  ) {
    if (c <= 0 || d <= 0) {
      throw new Error('Incorrect value of side length');
    }

    this.color = color;
  }

  getArea(): number {
    return this.c * this.d;
  }
}

export function getInfo(figure): string {
  const area = parseInt(figure.getArea().toFixed(2));

  return `A ${figure.color} ${figure.shape} - ${area}`
}
