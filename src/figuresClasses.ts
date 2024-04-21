export interface Figure {
  shape: 'circle' | 'rectangle' | 'triangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public c: number,
    public shape: 'triangle' = 'triangle',
  ) {
    const isTriangleValid = a + b > c && a + c > b && b + c > a;

    if (!isTriangleValid) {
      throw new Error("sides 1, 2 and 3 can't form a triangle");
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: string,
    public radius: number,
    public shape: 'circle' = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('radius should be a positive number');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: string,
    public a: number,
    public b: number,
    public shape: 'rectangle' = 'rectangle',
  ) {
    if (a <= 0 || b <= 0) {
      throw new Error('sides should be positive numbers');
    }
  }

  getArea(): number {
    const area = this.a * this.b;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
