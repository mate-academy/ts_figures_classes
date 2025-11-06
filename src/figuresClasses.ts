export interface Figure {
  color: 'red' | 'green' | 'blue';
  shape: 'triangle' | 'circle' | 'rectangle';
  getArea(): number;
}

export class Triangle implements Figure {
  color: 'red' | 'green' | 'blue';

  shape: 'triangle' = 'triangle';

  private a: number;

  private b: number;

  private c: number;

  constructor(
    color: 'red' | 'green' | 'blue',

    a: number,
    b: number,
    c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error(`Sides ${a}, ${b} and ${c} can't form a triangle`);
    }

    const sides = [a, b, c].sort((x, y) => x - y);

    if (sides[0] + sides[1] <= sides[2]) {
      throw new Error(
        'The longest side must be less than the sum of the other two sides',
      );
    }

    this.a = a;
    this.b = b;
    this.c = c;
    this.color = color;
  }

  getArea(): number {
    // Using Heron's formula to calculate the area
    const s = (this.a + this.b + this.c) / 2; // semi-perimeter
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  color: 'red' | 'green' | 'blue';

  shape: 'circle' = 'circle';

  private radius: number;

  constructor(color: 'red' | 'green' | 'blue', radius: number) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }

    this.radius = radius;
    this.color = color;
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle' = 'rectangle';

  color: 'red' | 'green' | 'blue';

  private width: number;

  private height: number;

  constructor(color: 'red' | 'green' | 'blue', width: number, height: number) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }

    this.width = width;
    this.height = height;
    this.color = color;
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
