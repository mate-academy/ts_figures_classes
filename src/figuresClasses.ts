type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Color;
  getArea(): number,
}

export class Triangle implements Figure {
  public shape: Shape = 'triangle';

  constructor(
    public color: Color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    let lengths: number[] = [this.a, this.b, this.c];

    lengths = lengths.sort((x: number, y: number) => y - x);

    if (lengths[0] >= (lengths[1] + lengths[2])) {
      throw new Error('It is not a triangle');
    }

    if ((this.a <= 0) || (this.b <= 0) || (this.c <= 0)) {
      throw new Error('Any length must be >= 0');
    }
  }

  getArea(): number {
    const p: number = (this.a + this.b + this.c) / 2;

    return Math.floor(Math.sqrt(p * (p - this.a)
      * (p - this.b) * (p - this.c))
      * 100) / 100;
  }
}

export class Circle implements Figure {
  public shape: Shape = 'circle';

  constructor(
    public color: Color,
    public radius: number,
  ) {
    if (this.radius <= 0) {
      throw new Error('Any length must be >= 0');
    }
  }

  getArea(): number {
    return Math.floor(Math.PI * this.radius ** 2 * 100) / 100;
  }
}

export class Rectangle implements Figure {
  public shape: Shape = 'rectangle';

  constructor(
    public color: Color,
    public width: number,
    public height: number,
  ) {
    if (this.width <= 0 || this.height <= 0) {
      throw new Error('Any length must be >= 0');
    }
  }

  getArea(): number {
    return this.width * this.height;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
