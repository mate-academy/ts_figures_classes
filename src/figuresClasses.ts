type Shape = 'triangle' | 'circle' | 'rectangle';
type Color = 'red' | 'green' | 'blue';

export interface Figure {
  shape: Shape,
  color: Color,
  getArea: () => {},
}

export class Triangle implements Figure {
  shape: Shape;

  constructor(
    public color,
    public a: number,
    public b: number,
    public c: number,
  ) {
    this.shape = 'triangle';

    if (this.a <= 0 && this.b <= 0 && this.c <= 0) {
      throw new Error('Side can not be <= 0');
    }

    const sides: number[]
      = [this.a, this.b, this.c].sort((numA, numB) => numB - numA);

    if (sides[0] >= (sides[1] + sides[2])) {
      throw new Error(
        'the longest side of a triangle is >= than a sum of two others',
      );
    }
  }

  getArea():number {
    const p: number = (this.a + this.b + this.c) / 2;
    const area: number
      = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));

    return Math.floor(area * 100) / 100;
  }
}

export class Circle implements Figure {
  shape: Shape;

  constructor(
    public color,
    public radius,
  ) {
    this.shape = 'circle';

    if (radius <= 0) {
      throw new Error('Radius can not be <= 0');
    }
  }

  getArea():number {
    return Math.floor((Math.PI * (this.radius ** 2)) * 100) / 100;
  }
}

export class Rectangle implements Figure {
  shape: Shape;

  constructor(
    public color,
    public width,
    public height,
  ) {
    this.shape = 'rectangle';

    if (width <= 0 || height <= 0) {
      throw new Error('Side can not be <= 0');
    }
  }

  getArea():number {
    return Math.floor((this.width * this.height) * 100) / 100;
  }
}

export function getInfo(figure): string {
  return `A ${figure.color} ${figure.shape} - ${figure.getArea()}`;
}
