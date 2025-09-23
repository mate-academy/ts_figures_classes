export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private a: number,
    private b: number,
    private c: number,
  ) {
    const longest = Math.max(a, b, c);

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be a positive number');
    }

    if (longest >= a + b + c - longest) {
      throw new Error(
        'Longest side must be longer then sum of two other sides',
      );
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return parseFloat(
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100,
    );
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('radius must be positive number');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius * this.radius) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    private width: number,
    private height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Width and height must be positive numbers');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
