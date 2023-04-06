export type Shapes = 'triangle' | 'circle' | 'rectangle';
export type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shapes;
  color: Colors;
  getArea: () => number;
}

export class Triangle implements Figure {
  shape: Shapes = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (a <= 0 || b <= 0 || c <= 0
      || a + b <= c || a + c <= b || b + c <= a) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const areaFull = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Number(areaFull.toFixed(2));
  }
}

export class Circle implements Figure {
  shape: Shapes = 'circle';

  radius: number;

  constructor(
    public color: Colors,
    radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('your error message');
    }

    this.radius = radius;
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shapes = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('your error message');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
