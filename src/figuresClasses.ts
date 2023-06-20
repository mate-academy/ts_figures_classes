type Colors = 'red' | 'green' | 'blue';
type Shapes = 'triangle' | 'circle' | 'rectangle';
export interface Figure {
  color: Colors;
  shape: Shapes;
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

    if (this.a + this.b <= this.c
      || this.b + this.c <= this.a
      || this.c + this.a <= this.b
    ) {
      throw new Error('sides of triangle must be less than sum of two others');
    }

    if (this.a <= 0
      || this.b <= 0
      || this.c <= 0
    ) {
      throw new Error('Any side length must be more 0');
    }
  }

  getArea(): number {
    const p = 0.5 * (this.a + this.b + this.c);

    return +(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
    ).toFixed(2);
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
      throw new Error('Radius must be more than 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    this.shape = 'rectangle';

    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Sides must be more than 0');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
