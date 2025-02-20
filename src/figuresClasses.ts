export interface Figure {
  shape: 'triangle' | 'circle' | 'rectangle';
  color: 'red' | 'green' | 'blue';
  getArea: () => number;
}

export class Triangle implements Figure {
  public shape: 'triangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public a = 0,
    public b = 0,
    public c = 0,
  ) {
    this.shape = 'triangle';

    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Triangle sides must be greater than 0');
    }

    if (a + b <= c || a + c <= b || b + c <= a) {
      throw new Error(`Sides ${a}, ${b}, and ${c} can't form a triangle`);
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return (
      Math.round(
        Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c)) * 100,
      ) / 100
    );
  }
}

export class Circle implements Figure {
  public shape: 'circle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public radius = 0,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('Triangle sides must be greater than 0');
    }
  }

  getArea(): number {
    const area = Math.PI * Math.pow(this.radius, 2);

    return Math.floor(area * 100 + 0.0001) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: 'rectangle';

  constructor(
    public color: 'red' | 'green' | 'blue',
    public width = 0,
    public height = 0,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error('Triangle sides must be greater than 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
