export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle' = 'triangle';
  color: 'red' | 'green' | 'blue';
  a: number;
  b: number;
  c: number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a: number,
    public b: number,
    public c: number,
  ) {

    this.a = a;
    this.b = b;
    this.c = c;

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Invalid side length');
    }

    if (this.a + this.b <= this.c || this.b + this.c <= this.a || this.a + this.c <= this.b) {
      throw new Error('In a triangle, the sum of the lengths of any two sides must be greater than the third side');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));
    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle' = 'circle';
  color: 'red' | 'green' | 'blue';
  radius: number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius: number,
  ) {

    this.radius = radius;
    if (this.radius <= 0) {
      throw new Error('Invalid radius entered');
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);
    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';
  color: 'red' | 'green' | 'blue';
  width: number;
  height: number;

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width: number,
    public height: number,
  ) {

    this.width = width;
    this.height = height;

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Invalid width or height length entered');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
