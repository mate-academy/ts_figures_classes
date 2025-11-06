export interface Figure {
  color: 'red' | 'green' | 'blue';
  shape: 'triangle' | 'circle' | 'rectangle';
  getArea(): number;
}

export class Triangle implements Figure {
  readonly shape: 'triangle' = 'triangle';

  constructor(
    public readonly color: 'red' | 'green' | 'blue',
    private readonly a: number,
    private readonly b: number,
    private readonly c: number,
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
  }

  getArea(): number {
    // Using Heron's formula to calculate the area
    const s = (this.a + this.b + this.c) / 2; // semi-perimeter
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  readonly shape: 'circle' = 'circle';

  constructor(
    public readonly color: 'red' | 'green' | 'blue',
    private readonly radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius * this.radius * 100) / 100;
  }
}

export class Rectangle implements Figure {
  readonly shape: 'rectangle' = 'rectangle';

  constructor(
    public readonly color: 'red' | 'green' | 'blue',
    private readonly width: number,
    private readonly height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than 0');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
