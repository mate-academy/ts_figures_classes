export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public readonly color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
    public readonly shape: 'triangle' = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('sides cannot be less than zero');
    }

    if (a + b + c - Math.max(a, b, c) <= Math.max(a, b, c)) {
      throw new Error(`sides ${a}, ${b} and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  constructor(
    public readonly color: 'red' | 'green' | 'blue',
    public radius: number,
    public readonly shape: 'circle' = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('radius cannot be less than zero');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public readonly color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
    public readonly shape: 'rectangle' = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('sides cannot be less than zero');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
