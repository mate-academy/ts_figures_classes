export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',
  getArea(): number,
}

export class Triangle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle' = 'triangle';

  a: number;

  b: number;

  c: number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    if (a > 0 && b > 0 && c > 0) {
      if (a + b <= c || a + c <= b || c + b <= a) {
        throw new Error('Not valid data');
      } else {
        this.a = a;
        this.b = b;
        this.c = c;
      }
    } else {
      throw new Error('Not valid data');
    }
  }

  getArea(): number {
    const square = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(square
      * (square - this.a)
      * (square - this.b)
      * (square - this.c))).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle' = 'circle';

  radius: number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Not valid data');
    } else {
      this.radius = radius;
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'triangle' | 'circle' | 'rectangle' = 'rectangle';

  width: number;

  height: number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    width: number,
    height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Not valid data');
    } else {
      this.width = width;
      this.height = height;
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
