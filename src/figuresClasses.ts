export interface Figure {
  shape: string;
  color: 'red' | 'blue' | 'green';
  getArea(): number;
}

// ---------------- TRIANGLE ----------------
export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: 'red' | 'blue' | 'green',
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle sides must be positive numbers.');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        'The sum of any two sides must be greater than the third side.',
      );
    }
  }

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;

    return (
      Math.floor(
        Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)) * 100,
      ) / 100
    );
  }
}

// ---------------- CIRCLE ----------------
export class Circle implements Figure {
  shape = 'circle';

  constructor(
    public color: 'red' | 'blue' | 'green',
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be a positive number.');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

// ---------------- RECTANGLE ----------------
export class Rectangle implements Figure {
  shape = 'rectangle';

  constructor(
    public color: 'red' | 'blue' | 'green',
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Rectangle sides must be positive numbers.');
    }
  }

  getArea(): number {
    return Math.floor(this.width * this.height * 100) / 100;
  }
}

// ---------------- getInfo ----------------
export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
