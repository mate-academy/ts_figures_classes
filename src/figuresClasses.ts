export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  a?: number;
  b?: number;
  c?: number;
  width?: number;
  height?: number;
  radius?: number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number = 0,
    public b: number = 0,
    public c: number = 0,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Not valid value!');
    }

    if (a + b <= c || a + c <= b || c + b <= a) {
      throw new Error('One of your size bigest than sum of both other!');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number = 0,
  ) {
    if (radius <= 0) {
      throw new Error('Not valid value!');
    }
  }

  getArea(): number {
    return Math.floor(this.radius * this.radius * Math.PI * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number = 0,
    public height: number = 0,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Not valid value!');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return typeof figure;
}
