type Color = 'red' | 'green' | 'blue';
type Shape = 'triangle' | 'circle' | 'rectangle';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea: () => number;
}
export class Triangle implements Figure {
  shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0) {
      throw new Error('input the sides of the triangle are less than 0 or 0');
    }

    if (!(a + b > c && b + c > a && a + c > b)) {
      throw new Error('input sides wrong length');
    }
  }

  getArea = (): number => {
    const s = 0.5 * (this.a + this.b + this.c);

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

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
      throw new Error('input radius are less than 0 or 0');
    }
  }

  getArea = (): number => {
    const area = Math.PI * this.radius ** 2;

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
      throw new Error('input rectangle sides are less than 0 or 0');
    }
  }

  getArea = (): number => {
    const area = this.width * this.height;

    return Math.floor(area * 100) / 100;
  };
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
