export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
    public shape: 'triangle' = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be positive');
    }

    if (c >= a + b || b >= c + a || a >= b + c) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  constructor(
    public color: Figure['color'],
    public radius: number,
    public shape: `circle` = `circle`,
  ) {
    if (this.radius <= 0) {
      throw new Error('Radius must be positive');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
    public shape: 'rectangle' = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Sides must be positive');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height);
  }
}

export function getInfo(figure: Circle | Rectangle | Triangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
