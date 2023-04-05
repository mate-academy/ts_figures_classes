export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides of the triangle must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`Sides ${a}, ${b}, and ${c} don't form a valid triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Math.floor(
      100 * Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)),
    ) / 100;
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('The radius of the circle must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(100 * Math.PI * this.radius ** 2) / 100;
  }
}

export class Rectangle {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('The width and height must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(100 * this.width * this.height) / 100;
  }
}

export function getInfo(figure: Figure): string {
  const area = figure.getArea();

  return `A ${figure.color} ${figure.shape} - ${area}`;
}
