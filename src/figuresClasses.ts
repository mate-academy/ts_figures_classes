type Shapes = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  color: Colors;
  shape: Shapes;
  getArea(): number;
}

export class Triangle implements Figure {
  constructor(
    public color: Colors,
    private a: number,
    private b: number,
    private c: number,
  ) {
    if (Math.min(a, b, c) <= 0) {
      throw new Error('Sides must be greater 0');
    }

    if ((a + b + c) - Math.max(a, b, c) <= Math.max(a, b, c)) {
      throw new Error(
        'The longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  shape: Shapes = 'triangle';

  getArea(): number {
    const p = (this.a + this.b + this.c) / 2;
    const area = (p * (p - this.a) * (p - this.b) * (p - this.c)) ** 0.5;

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Radius must be greater 0');
    }
  }

  shape: Shapes = 'circle';

  getArea(): number {
    const area = Math.PI * this.radius ** 2;

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (Math.min(width, height) <= 0) {
      throw new Error('Radius must be greater 0');
    }
  }

  shape: Shapes = 'rectangle';

  getArea(): number {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  }
}

export function getInfo(figure: Figure):string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
