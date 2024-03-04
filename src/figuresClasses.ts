type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public a: number,
    public b: number,
    public c: number,
    public color: string,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Length of each side must be greater than zero');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('The sides provided cannot form a triangle');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public radius: number,
    public color: string,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2 * 100) / 100);
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public width: number,
    public height: number,
    public color: string,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Length of each side must be greater than zero');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
