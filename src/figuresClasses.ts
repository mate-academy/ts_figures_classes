type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Incorrect value of side length');
    }

    if (a <= b + c || b <= c + a || c <= a + b) {
      throw new Error('Sides 1, 2 and 3 cannot form a triangle');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
  }
}

export class Circle implements Figure {
  shape: Shapes = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Incorrect value of radius');
    }
  }

  getArea(): number {
    return (Math.PI * this.radius ** 2) / 2;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public c: number,
    public d: number,
  ) {
    if (c <= 0 || d <= 0) {
      throw new Error('Incorrect value of side length');
    }
  }

  getArea(): number {
    return this.c * this.d;
  }
}

export function getInfo(figure: Figure): string {
  const area = parseInt(figure.getArea().toFixed(2));

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
