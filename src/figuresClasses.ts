type Shape = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (this.a <= 0
        || this.b <= 0
        || this.c <= 0
    ) {
      throw new Error('Any side length must be more 0');
    }

    if (this.a >= this.b + this.c
        || this.b >= this.a + this.c
        || this.c >= this.b + this.a
    ) {
      throw new Error('Side of triangle must be less than sum of two others');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) * 0.5;
    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return +area.toFixed(2);
  }
}

export class Circle implements Figure {
  shape: 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    this.shape = 'circle';

    if (this.radius <= 0) {
      throw new Error('Any side length must be more 0');
    }
  }

  getArea(): number {
    const area = Math.PI * (this.radius ** 2) * 100;

    return Math.floor(area) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  constructor(
    public color: Colors,
    public height: number,
    public width: number,
  ) {
    this.shape = 'rectangle';

    if (this.width <= 0
        || this.height <= 0
    ) {
      throw new Error('Any side length must be more 0');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return (`A ${figure.color} ${figure.shape} - ${figure.getArea()}`);
}
