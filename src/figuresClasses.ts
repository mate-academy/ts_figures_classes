export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue' | string;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
    readonly shape: 'triangle' = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c || a + c <= b || c + b <= a) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const s = 0.5 * (this.a + this.b + this.c);

    return Math.floor((
      Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c))
    ) * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
    readonly shape: 'circle' = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public width: number,
    public height: number,
    readonly shape: 'rectangle' = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
