export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
}

function isTriangle(a: number, b: number, c: number): boolean {
  if (a + b <= c || a + c <= b || b + c <= a) {
    return true;
  }

  return false;
}

export class Triangle implements Figure {
  constructor(
    public color: Figure,
    public a: number,
    public b: number,
    public c: number,
    public shape,
  ) {
    this.shape = 'triangle';

    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('Side cannot be <= 0');
    }

    if (isTriangle(this.a, this.b, this.c)) {
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
  constructor(
    public color: Figure,
    public radius: number,
    public shape,
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
  constructor(
    public color: Figure,
    public width: number,
    public height: number,
    public shape,
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
