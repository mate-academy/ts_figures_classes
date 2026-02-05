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
      throw new Error('Sides must be > 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Triangle cannot exist');
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Number(Math.floor(area * 100) / 100);
  }
}

export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: string,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be > 0');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Number(Math.floor(area * 100) / 100);
  }
}

export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides must be > 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Number(Math.floor(area * 100) / 100);
  }
}

export function getInfo(figure: Figure): string {
  const color = figure.color;
  const shape = figure.shape;
  const area = figure.getArea();

  return `A ${color} ${shape} - ${area}`;
}
