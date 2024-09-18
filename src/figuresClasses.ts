export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea(): number;
}

export class Triangle implements Figure {
  public readonly shape: 'triangle' = 'triangle';

  constructor(
    public readonly color: 'red' | 'green' | 'blue',

    private readonly a: number,

    private readonly b: number,

    private readonly c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Sides must be greater than zero');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(
        'The sum of any two sides must be greater than the third side',
      );
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.round(area * 100) / 100;
  }
}

export class Circle implements Figure {
  public readonly shape: 'circle' = 'circle';

  constructor(
    public readonly color: 'red' | 'green' | 'blue',
    private readonly radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater than zero');
    }
  }

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public readonly shape: 'rectangle' = 'rectangle';

  constructor(
    public readonly color: 'red' | 'green' | 'blue',
    private readonly width: number,
    private readonly height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Width and height must be greater than zero');
    }
  }

  getArea(): number {
    const area = this.width * this.height;

    return Math.round(area * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
