export interface Figure {
  color: string;
  shape: string;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  color: string;

  a: number;

  b: number;

  c: number;

  constructor(color: string, a: number, b: number, c: number) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('All sides must be positive numbers');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('Triangle could not be counted');
    }
    this.color = color;
    this.a = a;
    this.b = b;
    this.c = c;
  }

  getPerimeter(): number {
    return this.a + this.b + this.c;
  }

  getArea(): number {
    const s = this.getPerimeter() / 2;

    return (
      Math.floor(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  color: string;

  shape: string = 'circle';

  radius: number;

  constructor(color: string, radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be positive integer');
    }
    this.color = color;
    this.shape = 'circle';
    this.radius = radius;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  color: string;

  shape:string =  'rectangle';

  a: number;

  b: number;

  constructor(color: string, a: number, b: number) {
    if (a <= 0 || b <= 0) {
      throw new Error('All sides must be positive integer');
    }
    this.color = color;
    this.shape = 'rectangle';
    this.a = a;
    this.b = b;
  }

  getArea(): number {
    return this.a * this.b;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
