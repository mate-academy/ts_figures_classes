export interface Figure {
  color: 'red' | 'green' | 'blue';
  shape: 'triangle' | 'circle' | 'rectangle';

  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides of the triangle must be positive numbers!');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('These values can\'t form a triangle!');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.floor(Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    ) * 100) / 100;

    return area;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Circle radius must be a positive number!');
    }
  }

  getArea(): number {
    const area = Math.floor((Math.PI * this.radius ** 2) * 100) / 100;

    return area;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('The width and height must be positive numbers!');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return area;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
