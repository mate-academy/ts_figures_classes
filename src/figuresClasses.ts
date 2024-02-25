type Shape = 'triangle' | 'circle' | 'rectangle';
type Colors = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape;
  color: Colors;
  getArea(): number;
}

export class Triangle implements Figure {
  shape: Shape = 'triangle';

  constructor(
    public color: Colors,
    public a: number,
    public b: number,
    public c: number,
  ) {
    if (this.a <= 0 || this.b <= 0 || this.c <= 0) {
      throw new Error('only positive numbers are accepted');
    }

    const biggestSide = Math.max(this.a, this.b, this.c);

    if (biggestSide >= this.a + this.b + this.c - biggestSide) {
      throw new Error('wrong sides for a triangle');
    }
  }

  getArea(): number {
    const s: number = (this.a + this.b + this.c) / 2;

    const area = Math.sqrt(s * (s - this.a) * (s - this.b) * (s - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape = 'circle';

  constructor(
    public color: Colors,
    public radius: number,
  ) {
    if (radius <= 0) {
      throw new Error('only positive numbers are accepted');
    }
  }

  getArea(): number {
    const s: number = Math.PI * this.radius ** 2;

    return Math.floor(s * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape = 'rectangle';

  constructor(
    public color: Colors,
    public width: number,
    public height: number,
  ) {
    if (width <= 0 || height <= 0) {
      throw new Error('only positive numbers are accepted');
    }
  }

  getArea(): number {
    const s: number = (this.width * this.height);

    return Math.floor(s * 100) / 100;
  }
}

export function getInfo(figure: Figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
