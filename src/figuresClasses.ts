export interface Figure {
  shape: string;
  color: string;
  getArea(): number;
}
export class Triangle implements Figure {
  shape: string = 'triangle';

  color: string;

  constructor(
    color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Invalid triangle sides');
    }

    this.color = color;
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return Number(
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(2),
    );
  }
}

export class Circle implements Figure {
  color: string;

  shape: string = 'circle';

  constructor(color: string, public radius: number) {
    if (radius <= 0) {
      throw new Error('Invalid circle radius');
    }

    this.color = color;
  }

  getArea(): number {
    return Number(
      (Math.floor(Math.PI * 10000) / 10000 * this.radius ** 2).toFixed(2),
    );
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  color: string;

  constructor(color: string, public width: number, public height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle dimensions');
    }

    this.color = color;
  }

  getArea(): number {
    return Number((this.width * this.height).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
