import { error } from 'console';

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: string;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public shape: 'triangle',
    public color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!['red', 'blue', 'green'].includes(color)) {
      throw new Error('wrong color');
    }

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('the side of the triangle is less than or equal to zero');
    }

    if (a >= b + c || b >= a + c || c >= a + b) {
      throw new Error('the side of the triangle is less than or equal to zero');
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
    public shape: 'circle',
    public color: string,
    public radius: number,
  ) {
    if (!['red', 'blue', 'green'].includes(color)) {
      throw new Error('wrong color');
    }

    if (radius < 0) {
      throw new Error('radius must be > than zero');
    }
  }

  getArea(): number {
    return Math.round(((this.radius * this.radius * Math.PI) / 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public shape: 'rectangle',
    public color: string,
    public width: number,
    public height: number,
  ) {
    if (!['red', 'blue', 'green'].includes(color)) {
      throw new Error('wrong color');
    }

    if (width <= 0 || height <= 0) {
      throw new Error(
        'the side of the rectangle is less than or equal to zero',
      );
    }
  }

  getArea(): number {
    return Math.round(((this.width * this.height) / 2) * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
