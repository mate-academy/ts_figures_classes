export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';

  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
    readonly shape: 'triangle' = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || c + b <= a || c + a <= b || a + b <= c) {
      throw new Error('Please put positive value of triangle sides');
    }
  }

  getArea(): number {
    const s: number = 0.5 * (this.a + this.b + this.c);

    return Number(
      ((s * (s - this.a) * (s - this.b) * (s - this.c)) ** 0.5).toFixed(2),
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
    readonly shape: 'circle' = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('Please put positive value of radius');
    }
  }

  getArea(): number {
    return Number(
      (Math.floor(this.radius ** 2 * Math.PI * 100) / 100).toFixed(2),
    );
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
    readonly shape: 'rectangle' = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Please put positive value of width and height');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
