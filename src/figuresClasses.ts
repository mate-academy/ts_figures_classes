type ShapeType = 'triangle' | 'circle' | 'rectangle';
type ColorType = 'red' | 'green' | 'blue';

export interface Figure {
  shape: ShapeType,
  color: ColorType,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: ShapeType = 'triangle';

  constructor(
    public color: ColorType,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (Math.max(a, b, c) >= a + b + c - Math.max(a, b, c)) {
      throw new Error('Wrong length of side');
    }
  }

  getArea(): number {
    const semiperimeter = (1 / 2) * (this.a + this.b + this.c);

    const area = Math.sqrt(
      semiperimeter
      * (semiperimeter - this.a)
      * (semiperimeter - this.b)
      * (semiperimeter - this.c),
    );

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: ShapeType = 'circle';

  constructor(
    public color: ColorType,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('Wrong length of radius');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2);

    return Math.floor(area * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: ShapeType = 'rectangle';

  constructor(
    public color: ColorType,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Wrong length of side');
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
