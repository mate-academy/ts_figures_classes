type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}
export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (!(a + b > c && b + c > a && a + c > b) || a <= 0 || b <= 0 || c <= 0) {
      throw new Error('Error');
    }
  }

  getArea = (): number => {
    const a = this.a;
    const b = this.b;
    const c = this.c;

    const s = 0.5 * (a + b + c);

    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    return Math.floor(area * 100) / 100;
  };
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Error');
    }
  }

  getArea = (): number => {
    const radius = this.radius;

    const area = Math.PI * radius ** 2;

    return Math.floor(area * 100) / 100;
  };
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Error');
    }
  }

  getArea = (): number => {
    const width = this.width;
    const height = this.height;

    const area = width * height;

    return Math.floor(area * 100) / 100;
  };
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
