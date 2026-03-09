export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'blue' | 'green';

  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: 'red' | 'blue' | 'green',
    public a: number,
    public b: number,
    public c: number,
    public shape: 'triangle' | 'circle' | 'rectangle' = 'triangle',
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides cannot be negative');
    }

    if (c >= a + b) {
      throw new Error('Invalid triangle');
    }
  }

  getArea(): number {
    return (this.a + this.b + this.c) * 0.5;
  }
}

export class Circle implements Figure {
  constructor(
    public color: 'red' | 'blue' | 'green',
    public radius: number,
    public shape: 'triangle' | 'circle' | 'rectangle' = 'circle',
  ) {
    if (radius <= 0) {
      throw new Error('Radius cannot be negative');
    }
  }

  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: 'red' | 'blue' | 'green',
    public width: number,
    public height: number,
    public shape: 'triangle' | 'circle' | 'rectangle' = 'rectangle',
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height cannot be negative');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
