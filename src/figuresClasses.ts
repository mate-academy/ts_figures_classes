type ShapesType = 'triangle' | 'circle' | 'rectangle';
type ColorsType = 'red' | 'green' | 'blue';

export interface Figure {
  shape : ShapesType,
  color: ColorsType,
  getArea(): number,
}

export class Triangle implements Figure {
  shape : ShapesType = 'triangle';

  constructor(
    public color: ColorsType,
    public a: number = 0,
    public b: number = 0,
    public c: number = 0,
  ) {
    if (a <= 0 || b <= 0 || c <= 0 || a + b <= c) {
      throw new Error('Enter valid values');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: ShapesType = 'circle';

  constructor(
    public color: ColorsType,
    public radius: number = 0,
  ) {
    if (radius <= 0) {
      throw new Error('Enter valid value');
    }
  }

  getArea(): number {
    return Math.floor((Math.PI * this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: ShapesType = 'rectangle';

  constructor(
    public color: ColorsType,
    public width: number = 0,
    public height: number = 0,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('Eneter valid values');
    }
  }

  getArea(): number {
    return Math.floor((this.width * this.height * 100)) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
