export function isTriangle(a: number, b: number, c: number): boolean {
  const sides = [a, b, c].sort((sideA, sideB) => sideB - sideA);

  return sides[0] >= sides[1] + sides[2];
}

export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle',
  color: 'red' | 'green' | 'blue',

  getArea(): number;
}

export class Triangle implements Figure {
  a: number;

  b: number;

  c: number;

  shape: 'triangle' = 'triangle';

  color: 'red' | 'green' | 'blue';

  constructor(
    color: 'red' | 'green' | 'blue',
    a: number,
    b: number,
    c: number,
  ) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;

    if (this.a <= 0
      || this.b <= 0
      || this.c <= 0
      || isTriangle(this.a, this.b, this.c)) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    const area = Number(Math
      .sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)).toFixed(2));

    return area;
  }
}

export class Circle implements Figure {
  radius: number;

  shape: 'circle' = 'circle';

  color: 'red' | 'green' | 'blue';

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    this.radius = radius;
    this.color = color;

    if (this.radius <= 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    const s = Math.PI * (this.radius ** 2);

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  a: number;

  b: number;

  shape: 'rectangle' = 'rectangle';

  color: 'red' | 'green' | 'blue';

  constructor(color: 'red' | 'green' | 'blue', a: number, b: number) {
    this.a = a;
    this.b = b;
    this.color = color;

    if (this.a <= 0 || this.b <= 0) {
      throw new Error('Error');
    }
  }

  getArea(): number {
    return Number((this.a * this.b).toFixed(2));
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
