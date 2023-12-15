export interface Figure {
  shape: string,
  color: string,
  getArea(): number,
}

export class Triangle implements Figure {
  shape: string = 'triangle';

  color: string;

  constructor(
    color: string,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.color = color;

    if (a <= 0
      || b <= 0
      || c <= 0
      || a + b <= c
      || a + c <= b
      || b + c <= a
    ) {
      throw new Error('Invalid triangle sides');
    }
  }

  getArea(): number {
    const s = (this.a + this.b + this.c) / 2;

    return +(Math.sqrt(
      s * (s - this.a) * (s - this.b) * (s - this.c),
    )).toFixed(2);
  }
}

export class Circle implements Figure {
  shape: string = 'circle';

  color: string;

  constructor(
    color: string,
    public radius: number,
  ) {
    this.color = color;

    if (radius <= 0) {
      throw new Error('Invalid circle radius');
    }
  }

  getArea(): number {
    return +Math.floor(Math.PI * (this.radius ** 2) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: string = 'rectangle';

  color: string;

  constructor(
    color: string,
    public width: number,
    public height: number,
  ) {
    this.color = color;

    if (width <= 0 || height <= 0) {
      throw new Error('Invalid rectangle dimensions');
    }
  }

  getArea(): number {
    return +(this.width * this.height).toFixed(2);
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
