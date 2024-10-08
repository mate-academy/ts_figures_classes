export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
}

function isTriangle(a: number, b: number, c: number): boolean {
  return a + b > c && a + c > b && b + c > a;
}

export class Triangle implements Figure {
  shape: 'triangle';

  constructor(
    public color: Figure['color'],
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Side cannot be <= 0');
    }

    if (!isTriangle(this.a, this.b, this.c)) {
      throw new Error(
        'The longest side of a triangle cannot be <= than a sum of two others',
      );
    }
  }

  getArea(): number | never {
    const p = (this.a + this.b + this.c) / 2;
    const square = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(square * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: 'circle';

  constructor(
    public color: Figure['color'],
    public radius: number,
  ) {
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error('Radius cannot be <= 0');
    }
  }

  getArea(): number | never {
    const square = Math.PI * this.radius * this.radius;

    return Math.floor(square * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  constructor(
    public color: Figure['color'],
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Side cannot be <= 0');
    }
  }

  getArea(): number {
    const square = this.width * this.height;

    return Math.floor(square * 100) / 100;
  }
}

export function getInfo(figure: Triangle | Circle | Rectangle): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
