type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';
export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    protected a: number,
    protected b: number,
    protected c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be greater than 0');
    }

    // проверка существования треугольника
    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
    this.shape = 'triangle';
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    protected radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }

    this.shape = 'circle';
  }

  getArea(): number {
    return Math.floor(100 * (Math.PI * this.radius ** 2)) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color: Color,
    protected width: number,
    protected height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('throws an error');
    }
    this.shape = 'rectangle';
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
